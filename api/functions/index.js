const functions = require('firebase-functions');
const admin = require('firebase-admin');
const firebaseConfig = {
  apiKey: 'AIzaSyC5oUqe1Y0-ZGy_tkTG7jwWx98-LGiVMRs',
  authDomain: 'mapsproject-228715.firebaseapp.com',
  databaseURL: 'https://mapsproject-228715.firebaseio.com',
  projectId: 'mapsproject-228715',
  storageBucket: 'mapsproject-228715.appspot.com',
  messagingSenderId: '1052677426743',
  appId: '1:1052677426743:web:9625bece8d88ca9474f9b2',
  measurementId: 'G-BSTYSQ6D7Q',
};

admin.initializeApp(firebaseConfig);
const turf = require('@turf/turf');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

const whitelist = [/localhost/gi, /tender-wright-.*\.netlify\.app/gi];
// eslint-disable-next-line no-unused-vars
function checkOrigin(origin) {
  console.log(origin);
  return whitelist.reduce((a, f) => a || f.test(origin), false);
}
// const corsOptions = {
//   origin: (origin, cb) => {
//     if (whitelist.reduce((a, f) => a || f.test(origin), false)) {
//       cb(null, true);
//     } else {
//       cb(new Error('Not allowed by CORS'));
//     }
//   },
//   methods: 'POST,OPTIONS',
// };

// const cors = require('cors')(corsOptions);

// exports.getRoutes = functions.https.onRequest((req, res) => {
//   // cors(request, response, () => {
//   const reqOrigin = req.get('origin');
//   if (checkOrigin(reqOrigin)) {
//     res.set('Access-Control-Allow-Origin', reqOrigin);
//   }

//   if (req.method === 'POST') {
//     const { origin, destination } = req.body;
//     if (origin && destination)
//       getRoutes(origin, destination).then((routes) => {
//         res.send(routes);
//       });
//   } else if (req.method === 'OPTIONS') {
//     // Send response to OPTIONS requests
//     res.set('Access-Control-Allow-Methods', 'POST');
//     res.set('Access-Control-Allow-Headers', 'Content-Type');
//     res.set('Access-Control-Max-Age', '3600');
//     res.status(204).send('');
//   } else {
//     res.send('Unknown Method');
//   }
//   // });
// });

exports.getRoutes = functions.https.onRequest((req, res) => {
  if (req.method === 'POST') {
    res.set('Access-Control-Allow-Origin', '*');
    const { origin, destination } = req.body;
    if (origin && destination)
      getRoutes(origin, destination).then((routes) => {
        res.send(routes);
      });
  } else if (req.method === 'OPTIONS') {
    res.set('Access-Control-Allow-Origin', '*');
    // Send response to OPTIONS requests
    res.set('Access-Control-Allow-Methods', 'POST');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.set('Access-Control-Max-Age', '3600');
    res.status(204).send('');
  } else {
    res.send('Unknown Method');
  }
});

async function getRoutes(origin, destination) {
  const originP = turf.point(origin);
  const destP = turf.point(destination);

  const distanceThreshold = 1; //kilometers
  const WALKING_SPEED = 5; // km/h
  const DRIVING_SPEED = 60; // km/h

  const options = { units: 'kilometers' };

  const routes = [];
  try {
    const routesSnapshot = await admin.firestore().collection('routes').get();
    routesSnapshot.forEach((doc) => {
      const route = { id: doc.id, ...doc.data() };
      if (typeof route.path === 'string') route.path = JSON.parse(route.path);
      const path = route.path;
      const originDistance = turf.pointToLineDistance(originP, path, options);
      const destDistance = turf.pointToLineDistance(destP, path, options);
      const getInPoint = turf.nearestPointOnLine(path, originP, options);
      const getOutPoint = turf.nearestPointOnLine(path, destP, options);
      getInPoint.properties.type = 'start';
      getOutPoint.properties.type = 'end';

      if (
        originDistance <= distanceThreshold &&
        destDistance <= distanceThreshold
      ) {
        // const pathRev = JSON.parse(JSON.stringify(path));
        // pathRev.geometry.coordinates.reverse();
        // console.log(JSON.stringify(path), 'sad', JSON.stringify(pathRev));
        const slicedPath1 = turf.lineSlice(originP, destP, path);
        // const slicedPath2 = turf.lineSlice(originP, destP, pathRev);
        const p1D = turf.length(slicedPath1);
        // const p2D = turf.length(slicedPath2);
        // console.log(p1D, p2D);
        routes.push({
          name: route.name,
          availability: route.availability,
          id: route.id,
          path: turf.featureCollection([slicedPath1, getInPoint, getOutPoint]),
          walking: {
            originToBus: {
              distance: originDistance,
              time: (originDistance / WALKING_SPEED) * 60,
            },
            busToDestination: {
              distance: destDistance,
              time: (destDistance / WALKING_SPEED) * 60,
            },
          },
          driving: {
            distance: p1D,
            time: (p1D / DRIVING_SPEED) * 60,
          },
          tripEST:
            (originDistance / WALKING_SPEED) * 60 +
            (destDistance / WALKING_SPEED) * 60 +
            (p1D / DRIVING_SPEED) * 60,
          tripDistance: originDistance + destDistance + p1D,
          units: options.units,
        });
      }
    });
  } catch (ex) {
    console.log(ex);
  }

  for (const route of routes) {
    const { id } = route;
    const buses = await getBuses(id);
    route.buses = buses;
  }

  routes.sort((a, b) => a.tripEST - b.tripEST);
  if (routes.length > 0) routes[0].fastest = true;

  return routes;
}

async function getBuses(routeId) {
  const buses = [];
  try {
    const busesSnapshot = await admin
      .firestore()
      .collection('busses')
      .where('route_id', '==', routeId)
      .get();
    busesSnapshot.forEach((doc) => {
      const bus = { id: doc.id, ...doc.data() };
      buses.push(bus);
    });
  } catch (ex) {
    console.log(ex);
  }

  return buses;
}
