const {db} = require('../../firebase-config')
const { getFirestore, collection, query, where, getDocs } = require('firebase/firestore');

const getCompras = async (req, res) => {
    try {
        const usersCollectionRef = collection(db, 'users');
        const q = query(usersCollectionRef, where('compras', '!=', null)); // Filter users with non-null compras

        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            return res.status(404).json({ error: 'No users with compras found.' });
        }

        const usersData = querySnapshot.docs.map(doc => {
            const userData = doc.data();
            return {
                email: userData.email,
                compras: userData.compras,
                entrega: userData.Entrega,
                isAdmin: userData.isAdmin
            };
        });

        res.status(200).json(usersData);
    } catch (error) {
        res.status(500).json( {error: error.message});
    }
};

module.exports = getCompras;
