import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCLzW69ycEOS9zPS7sHaJw5skJ_2Jz3ke0",
    authDomain: "events-portal-society.firebaseapp.com",
    projectId: "events-portal-society",
    storageBucket: "events-portal-society.appspot.com",
    messagingSenderId: "430907638880",
    appId: "1:430907638880:web:81761d68ca2a81b7daaf05",
    measurementId: "G-42HMVHTCBY"
};

firebase.initializeApp(firebaseConfig);

export default firebase;


