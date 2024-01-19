const { auth, db } = require('../../firebase-config');
const { createUserWithEmailAndPassword, sendEmailVerification } = require('firebase/auth');
const {doc, collection, addDoc, setDoc, getDoc} = require('firebase/firestore')

const postUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const usersCollection = collection(db, 'users') 
        const userDocRef = doc(usersCollection, email);
        const existingUserDoc = await getDoc(userDocRef);
        if (existingUserDoc.exists()) {
            return res.status(400).json({ error: 'El usuario ya existe' });
        }
        await setDoc(userDocRef,{
            email
        })
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        await sendEmailVerification(user);
        console.log(user);
        res.status(200).json({ message: 'Usuario creado correctamente', user });
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
};

module.exports = postUser;
