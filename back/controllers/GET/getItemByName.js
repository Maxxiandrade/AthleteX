const {db} = require('../../firebase-config')
const { getFirestore, collection, query, where, getDocs } = require('firebase/firestore');

const getItemByName = async (req, res) => {
    try {
        const {string} = req.query
        const itemsCollectionRef = collection(db, 'items');
        const q = query(itemsCollectionRef, where('nombre', '>=', string))
        const querySnapshot = await getDocs(q)
        const usersData = querySnapshot.docs.map(doc => {
            const userData = doc.data();
            return {
                nombre: userData.nombre,
                id: userData.id,
                foto: userData.foto,
                marca: userData.marca,
                deporte: userData.deporte,
                descripcion: userData.descripcion,
                precio: userData.precio
            };
        });
        res.status(200).json(usersData)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getItemByName;
