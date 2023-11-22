// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYxEGV2IpmoP9yLmrblfccXFbiyJB-SbU",
  authDomain: "ev-16-6c056.firebaseapp.com",
  projectId: "ev-16-6c056",
  storageBucket: "ev-16-6c056.appspot.com",
  messagingSenderId: "844494034763",
  appId: "1:844494034763:web:ddc9da72acfa23d1be7ace",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
