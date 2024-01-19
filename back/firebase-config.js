// Importa las funciones que necesitas de los SDK que necesitas
const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');
const { getAuth } = require('firebase/auth');

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA2dcQ7NdA42lVzlc6TIsl8MYnx8aKusUc",
  authDomain: "athletix-35cd2.firebaseapp.com",
  projectId: "athletix-35cd2",
  storageBucket: "athletix-35cd2.appspot.com",
  messagingSenderId: "424622551287",
  appId: "1:424622551287:web:d2cfbc8b48524e9774e3f2"
  // No incluyas measurementId si no estás utilizando Google Analytics
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

module.exports = { db, auth };
