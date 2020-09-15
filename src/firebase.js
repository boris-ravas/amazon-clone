import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA1fkhSbrWEDlKFNycGJ4-yvMsXjaClLGM",
  authDomain: "clone-5631a.firebaseapp.com",
  databaseURL: "https://clone-5631a.firebaseio.com",
  projectId: "clone-5631a",
  storageBucket: "clone-5631a.appspot.com",
  messagingSenderId: "979503984153",
  appId: "1:979503984153:web:cfe28c21f1fdac9b580488",
  measurementId: "G-89N71WYYJF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
