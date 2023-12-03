// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfBCrtz7sNs01_dVXHYGDONYoTkbz0h2U",
  authDomain: "react-first-project-1438c.firebaseapp.com",
  projectId: "react-first-project-1438c",
  storageBucket: "react-first-project-1438c.appspot.com",
  messagingSenderId: "55019214804",
  appId: "1:55019214804:web:f6461da904ce311db0a841"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);