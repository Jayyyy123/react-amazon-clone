// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC_QlWQa0hgj359MT0NKnA7Y2MHt0FBsKc",
  authDomain: "clone-ed944.firebaseapp.com",
  databaseURL: "https://clone-ed944.firebaseio.com",
  projectId: "clone-ed944",
  storageBucket: "clone-ed944.appspot.com",
  messagingSenderId: "437148934544",
  appId: "1:437148934544:web:ccd79d0529250754eb9315",
  measurementId: "G-GTNG1FQCZ9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
