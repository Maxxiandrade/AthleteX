// Import the functions you need from the SDKs you need
const { initializeApp } = require('firebase/app');
const {getFirestore} = require('firebase/firestore')
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2dcQ7NdA42lVzlc6TIsl8MYnx8aKusUc",
  authDomain: "athletix-35cd2.firebaseapp.com",
  projectId: "athletix-35cd2",
  storageBucket: "athletix-35cd2.appspot.com",
  messagingSenderId: "424622551287",
  appId: "1:424622551287:web:d2cfbc8b48524e9774e3f2",
  measurementId: "G-BRKTFPH3D1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

module.exports = {db}