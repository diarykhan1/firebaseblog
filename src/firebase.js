import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAc7uPBDxhzGgLnWuSg_9TspTfZ77tKyi8",
    authDomain: "blog-e9291.firebaseapp.com",
    projectId: "blog-e9291",
    storageBucket: "blog-e9291.appspot.com",
    messagingSenderId: "1086498116989",
    appId: "1:1086498116989:web:ae8b192dabbbc05a1aa814",
    measurementId: "G-LCG24ZNJ1N"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
  
export default db;