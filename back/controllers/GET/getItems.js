const { db } = require('../../firebase-config');
const { collection, getDocs } = require('firebase/firestore');

const getItems = async (req, res) => {
    try {
        const itemsCollection = await getDocs(collection(db, 'items'));
        const itemsData = itemsCollection.docs.map(doc => doc.data());
        res.status(200).json(itemsData);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = getItems;
