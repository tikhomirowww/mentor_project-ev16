// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// REACT_APP_APIKEY = AIzaSyAYxEGV2IpmoP9yLmrblfccXFbiyJB-SbU
// REACT_APP_AUTHDOMAIN = ev-16-6c056.firebaseapp.com
// REACT_APP_PROJECTID = ev-16-6c056
// REACT_APP_STORAGEBUCKET = ev-16-6c056.appspot.com
// REACT_APP_MESSAGINGSENDERID = 844494034763
// REACT_APP_APPID
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
