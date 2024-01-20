const { getFirestore, collection, query, where, getDocs, deleteDoc, doc } = require('firebase/firestore');

const deleteItem = async (req, res) => {
    try {
        const { id } = req.body;
        const firestore = getFirestore();
        const itemsRef = collection(firestore, 'items');
        const q = query(itemsRef, where('id', '==', id));

        const querySnapshot = await getDocs(q);


        if (querySnapshot.size === 0) {
            return res.status(404).json({ error: 'Document not found' });
        }

        const docToDelete = querySnapshot.docs[0];

        const docRef = doc(itemsRef, docToDelete.id);

        await deleteDoc(docRef);

        res.status(200).json('Ok');
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = deleteItem;
