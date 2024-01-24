const { fs, db } = require('../../firebase-config');
const { collection, getDocs, query, where } = require('firebase/firestore');

const getMyUser = async (req, res) => {
    try {
        const { email } = req.query;

        const usersCollectionRef = collection(db, 'users');
        const q = query(usersCollectionRef, where('email', '==', email));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            return res.status(404).json({ error: 'Usuario no encontrado.' });
        }

        const userData = querySnapshot.docs[0].data();
        const userInfo = {
            id: userData?.id,
            compras: userData?.compras,
            entrega: userData?.Entrega,
            isAdmin: userData?.isAdmin
        };

        res.status(200).json(userInfo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = getMyUser;
