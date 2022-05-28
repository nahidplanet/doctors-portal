// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDve1MOyj9H-h02sXFFeaG6YHiJ-UjGB8U",
  authDomain: "doctors-portal-9de9f.firebaseapp.com",
  projectId: "doctors-portal-9de9f",
  storageBucket: "doctors-portal-9de9f.appspot.com",
  messagingSenderId: "1016661789636",
  appId: "1:1016661789636:web:3b780a2ec6707eb926b291"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;