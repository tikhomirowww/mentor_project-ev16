// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTXqsRycJI6HsbNqa0e-O84oK5n6RjPrw",
  authDomain: "crazyproject-f6642.firebaseapp.com",
  projectId: "crazyproject-f6642",
  storageBucket: "crazyproject-f6642.appspot.com",
  messagingSenderId: "1028178826199",
  appId: "1:1028178826199:web:8953026dccca5c9f67f192",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
