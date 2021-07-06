import firebase from "firebase/app";
import "firebase/firestore";

let config = {
  apiKey: "AIzaSyAmHs2HbOg-cDcj4vXSVYXuqd3G4iiI70s",
  authDomain: "sportdetails-bba16.firebaseapp.com",
  databaseURL: "https://sportdetails-bba16-default-rtdb.firebaseio.com",
  projectId: "sportdetails-bba16",
  storageBucket: "sportdetails-bba16.appspot.com",
  messagingSenderId: "553380463332",
  appId: "1:553380463332:web:3fc1f6ffa920300af3a2f1",
  measurementId: "G-CM7CR5732E",
};

firebase.initializeApp(config);
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

export default db;
