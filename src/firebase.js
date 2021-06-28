import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqilXutAUdLSQvFkNTDOGBfsTjicWa99k",
  authDomain: "twitter-clone-baf9f.firebaseapp.com",
  projectId: "twitter-clone-baf9f",
  storageBucket: "twitter-clone-baf9f.appspot.com",
  messagingSenderId: "64256269096",
  appId: "1:64256269096:web:a665ac7ea6bf0dd7b98e1d",
  measurementId: "G-57ST66FXVR"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
