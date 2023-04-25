import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD-xqMQ9RkvHw_Qg9AT_f3y8H5TXjphBFo",
  authDomain: "linkedin-61264.firebaseapp.com",
  projectId: "linkedin-61264",
  storageBucket: "linkedin-61264.appspot.com",
  messagingSenderId: "494768823355",
  appId: "1:494768823355:web:c2c3b8e2198b50d0cbd01e",
};

// const db = firebaseApp.firestore();
// const firebaseApp = firebase.initializeAp(firebaseConfig);
const app = initializeApp(firebaseConfig); //connect above code
const db = getFirestore(app); // database
const auth = getAuth(); // login

export { db, auth };
