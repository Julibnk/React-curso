import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuuQU1F6fqC2Wm9d45NOq1CBcczNGzVI4",
  authDomain: "react-apps-cursos-53866.firebaseapp.com",
  projectId: "react-apps-cursos-53866",
  storageBucket: "react-apps-cursos-53866.appspot.com",
  messagingSenderId: "1093239496670",
  appId: "1:1093239496670:web:556e9b95808ff95d8ec74f",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
