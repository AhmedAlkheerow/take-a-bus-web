import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/firebase-auth';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyC5oUqe1Y0-ZGy_tkTG7jwWx98-LGiVMRs',
  authDomain: 'mapsproject-228715.firebaseapp.com',
  databaseURL: 'https://mapsproject-228715.firebaseio.com',
  projectId: 'mapsproject-228715',
  storageBucket: 'mapsproject-228715.appspot.com',
  messagingSenderId: '1052677426743',
  appId: '1:1052677426743:web:9625bece8d88ca9474f9b2',
  measurementId: 'G-BSTYSQ6D7Q',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
const db = firebase.firestore();
export const usersRef = db.collection('users');

export const auth = firebase.auth();
if (!window.isJest) {
  auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
}
export const googleAuth = new firebase.auth.GoogleAuthProvider();
export default firebase;
