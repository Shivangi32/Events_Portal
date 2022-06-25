
import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, GoogleAuthProvider , signInWithPopup } from "firebase/auth";
import {  addDoc } from "firebase/firestore"; 
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
export const auth=getAuth(app);
export const db = getFirestore(app);

const provider= new GoogleAuthProvider();

export const signInWithGoogle=event=>{

  event.preventDefault();
  signInWithPopup(auth,provider)
    .then((result)=>{
       console.log(result);
       const name=result.user.displayName;
       const email=result.user.email;
       const profilePic=result.user.photoURL;

       localStorage.setItem("name",name);
       localStorage.setItem("email",email);
       localStorage.setItem("profilePic",profilePic);
    })
    .catch((error)=>{
       console.log(error);
    });

};

/*export function addToDB(){
try {

  const docRef = addDoc(collection(db, "Events/today"), {
    key:"1",
    first: "Ada",
    last: "Lovelace",
    born: 1815
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  //console.error("Error adding document: ", e);
}
}*/