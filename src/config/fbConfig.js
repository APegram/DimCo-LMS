//importing just the base features of firebase
import firebase from 'firebase/app';
//importing db
import 'firebase/firestore';
import 'firebase/auth'

let firebaseConfig = {
  apiKey: "AIzaSyAMtN63u6WbHMsUvKtNHO2oE2o4fVp_Aow",
  authDomain: "dimco-lms.firebaseapp.com",
  databaseURL: "https://dimco-lms.firebaseio.com",
  projectId: "dimco-lms",
  storageBucket: "dimco-lms.appspot.com",
  messagingSenderId: "258601261580",
  appId: "1:258601261580:web:86089a5a4cad85fc"
};

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
}

firebase.initializeApp(firebaseConfig);
firebase.firestore()

export {
  firebase,
  rrfConfig
}