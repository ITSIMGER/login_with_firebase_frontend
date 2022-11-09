
// import * as firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDbgQHfKhzMUn-ihH0_EOeO1Zcf-4llZoA",
  authDomain: "imger-fc7cd.firebaseapp.com",
  projectId: "imger-fc7cd",
  storageBucket: "imger-fc7cd.appspot.com",
  messagingSenderId: "13775534137",
  appId: "1:13775534137:web:eda20671bf1707fc5db5e8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const FacebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const TwitterAuthProvider =new firebase.auth.TwitterAuthProvider();
const GithubAuthProvider =new firebase.auth.GithubAuthProvider();
export {auth, db, googleAuthProvider,FacebookAuthProvider,GithubAuthProvider,TwitterAuthProvider};

export default firebase;
// export const auth = firebase.auth();
// export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

// Import the functions you need from the SDKs you need
// import * as firebase from "./pages/firebase";
// import { initializeApp } from "firebase/app";
// require('dotenv').config();

// const firebaseConfig = {
//   // apiKey: process.env.APIKEY,
//   apiKey: "AIzaSyDbgQHfKhzMUn-ihH0_EOeO1Zcf-4llZoA",
//   authDomain: process.env.AUTHDOMAIN,
//   projectId: process.env.PROJECTID,
//   storageBucket: process.env.STORAGEBUCKET,
//   messagingSenderId: process.env.MESSAGINGSENDERID,
//   appId: "1:13775534137:web:eda20671bf1707fc5db5e8"
// };