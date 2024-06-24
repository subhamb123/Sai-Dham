// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJHx9d47BVU_U8-1IuBXazBZJpUOXDKAY",
  authDomain: "sai-dham-bellevue.firebaseapp.com",
  projectId: "sai-dham-bellevue",
  storageBucket: "sai-dham-bellevue.appspot.com",
  messagingSenderId: "298443581661",
  appId: "1:298443581661:web:12e1fc993b8f87f58e5334",
  measurementId: "G-RWMK2P5H3M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };