const { db } = require ("../../firebase-config");
const { collection, getDocs, where, query, not } = require('firebase/firestore');

const getAllCompras = async (req, res) => {
    try {
        const usersCollectionRef = collection(db, 'users');
        const q = query(usersCollectionRef, where('compras', '!=', null), where('compras.entregado', '==', false));
        const querySnapshot = await getDocs(q);
        const usersData = querySnapshot.docs.map(doc => {
            const userData = doc.data();
            return {
                email: userData.email,
                compras: userData.compras,
                entrega: userData.Entrega,
            };
        });
        res.status(200).json(usersData);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = getAllCompras;