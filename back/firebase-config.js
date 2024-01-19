// Importa las funciones que necesitas de los SDK que necesitas
const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');
const { getAuth } = require('firebase/auth');
const admin = require('firebase-admin');

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
const app = initializeApp(firebaseConfig);

// Configura el SDK Admin para trabajar con Firestore en el backend
const serviceAccount = require('./athletix-35cd2-firebase-adminsdk-zl4m0-b14f90e487.json'); 
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://console.firebase.google.com/u/0/project/athletix-35cd2/database/athletix-35cd2-default-rtdb/data/~2F?hl=es',
});

// Inicializa Firebase
const db = getFirestore(app);
const auth = getAuth(app);
const fs = admin.firestore()

module.exports = { db, auth, fs };
