// Import the functions you need from the SDKs you need
import { FirebaseError, initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAV_L5zPHyRy5GnZ3PbOxZop_ylP92eaPE",
  authDomain: "technowithbackend.firebaseapp.com",
  projectId: "technowithbackend",
  storageBucket: "technowithbackend.firebasestorage.app",
  messagingSenderId: "776092396420",
  appId: "1:776092396420:web:fedf3f5ef5f56ff32d0bd1",
  measurementId: "G-E9GK2J77W3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export {app, auth};