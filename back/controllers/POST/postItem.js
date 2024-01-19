const db = require('../../firebase-config');
const { getFirestore, collection, addDoc } = require('firebase/firestore');

const postItem = async (req, res) => {
    try {
        const {
            id,
            nombre,
            marca,
            precio,
            deporte,
            descripcion,
            foto
        } = req.body;

        const db = getFirestore(); // Assuming your firebase-config is correctly set up

        const itemsRef = collection(db, 'items');
         await addDoc(itemsRef, {
            id,
            nombre,
            marca,
            precio,
            deporte,
            descripcion,
            foto
        });

        res.status(200).json('Item creado correctamente');
    } catch (error) {
        console.error(error);
        res.status(400).json('Error al crear nuevo item');
    }
};

module.exports = postItem;
