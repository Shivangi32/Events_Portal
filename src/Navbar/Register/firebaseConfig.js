
import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { addDoc } from "firebase/firestore";
require("firebase/firestore");


const firebaseConfig = {
  apiKey: "AIzaSyA9dnYwX75I4AD7DTm5pWR8SAbq3aZNzIE",
  authDomain: "events-portal-38d78.firebaseapp.com",
  databaseURL: "https://events-portal-38d78-default-rtdb.firebaseio.com",
  projectId: "events-portal-38d78",
  storageBucket: "events-portal-38d78.appspot.com",
  messagingSenderId: "619956581280",
  appId: "1:619956581280:web:3b7bf7a49cb69c0331aac5",
  measurementId: "G-4W81L6P046"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const provider = new GoogleAuthProvider();
export const FireBase = initializeApp(firebaseConfig);