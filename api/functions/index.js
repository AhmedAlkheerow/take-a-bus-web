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
const lodash = require('lodash');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest(async (request, response) => {
  cors(request, response, async () => {
    if (request.method === 'POST') {
      let routes = [];
      const lat = request.body.lat;
      const long = request.body.long;
      const point = turf.point([lat, long]);
      const snapshot = await admin.firestore().collection('routes').get();
      const docs = snapshot.docs;
      docs.forEach((doc) => {
        const docData = doc.data();
        const pathObject = JSON.parse(docData.path);
        const lineArray = pathObject.geometry.coordinates;
        const line = turf.lineString(lineArray);
        routes.push({
          ...docData,
          path: pathObject,
          distance: turf.pointToLineDistance(point, line, { units: 'meters' }),
        });
      });
      const sortedRoutes = lodash.sortBy(routes, ['distance'], ['asc']);
      response.send({
        route: sortedRoutes[0],
        lat,
        long,
      });
    } else {
      response.send('Unknown Method');
    }
  });
});
