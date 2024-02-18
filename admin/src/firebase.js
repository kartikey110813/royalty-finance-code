// Import the functions you need from the SDKs you need
import firebase from 'firebase';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
firebase.initializeApp({
  apiKey: "AIzaSyCB1azoe6cZMF_NB5sfIDPU_6PBkUfwjyA",
  authDomain: "royalty-finance-group.firebaseapp.com",
  projectId: "royalty-finance-group",
  storageBucket: "royalty-finance-group.appspot.com",
  messagingSenderId: "688553885221",
  appId: "1:688553885221:web:776ac8723853049a7cc9cc",
  measurementId: "G-GWK8E11J6V"
});

// Initialize Firebase
var auth = firebase.auth();
var db = firebase.firestore();

export {auth,db}