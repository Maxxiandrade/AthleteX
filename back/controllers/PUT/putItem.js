const { getFirestore, collection, getDocs, query, where, doc, updateDoc } = require('firebase/firestore');

const findItemById = async (req, res) => {
    const { id, price } = req.body;
    const firestore = getFirestore();
    const itemsRef = collection(firestore, 'items');
    const q = query(itemsRef, where('id', '==', id));

    try {
        const querySnapshot = await getDocs(q);

        if (querySnapshot.size === 0) {
            return res.status(404).json({ error: 'Item not found' });
        }

        const itemDoc = querySnapshot.docs[0];


        if(price === 0){
            await updateDoc(doc(itemsRef, itemDoc.id), {
                precio: 'Out of stock'
            });
        }
        else{
        await updateDoc(doc(itemsRef, itemDoc.id), {
            precio: price
        });}

        res.status(200).json({ message: 'Precio updated successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = findItemById;
