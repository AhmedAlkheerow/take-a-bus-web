const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({ origin: true });
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
exports.getRoutes = functions.https.onRequest(async (request, response) => {
  cors(request, response, async () => {
    // Only POST
    if (request.method === 'POST') {
      const { origin, destination } = request.body;
      const routes = await getRoutes(origin, destination);
      response.send(routes);
    } else {
      response.send('Unknown Method');
    }
  });
});

async function getRoutes(origin, destination) {
  const originP = turf.point(origin);
  const destP = turf.point(destination);

  const distanceThreshold = 0.5; //kilometers

  const options = { units: 'kilometers' };

  const routes = [];
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
      routes.push({
        name: route.name,
        availability: route.availability,
        id: route.id,
        path: turf.featureCollection([route.path, getInPoint, getOutPoint]),
        originDistance,
        destDistance,
        totalDistance: originDistance + destDistance,
        units: options.units,
      });
    }
  });

  for (const route of routes) {
    const { id } = route;
    const buses = await getBuses(id);
    route.buses = buses;
  }

  routes.sort((a, b) => a.totalDistance - b.totalDistance);
  routes[0].fastest = true;

  return routes;
}

async function getBuses(routeId) {
  const buses = [];
  const busesSnapshot = await admin
    .firestore()
    .collection('busses')
    .where('route_id', '==', routeId)
    .get();
  busesSnapshot.forEach((doc) => {
    const bus = { id: doc.id, ...doc.data() };
    buses.push(bus);
  });

  return buses;
}
