// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { lstat } from "fs";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyC6367x7SO7plpfjG4vVV8uQSt-Ev4nqZU",
  authDomain: "mentor-project-f8898.firebaseapp.com",
  projectId: "mentor-project-f8898",
  storageBucket: "mentor-project-f8898.appspot.com",
  messagingSenderId: "615506612441",
  appId: "1:615506612441:web:da0e9a9cffee80d08b2ec8",
  measurementId: "G-BSWE93B8DN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
