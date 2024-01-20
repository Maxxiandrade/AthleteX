const {db, fs} = require('../../firebase-config');
const {updateDoc, doc} = require('firebase/firestore')

const putShipping = async(req,res)=>{
    try {
        const {email, state, city, adress} = req.body
        const usersRef =  doc(db, 'users', email);
        await updateDoc(usersRef, {
            Entrega:{
                Ciudad: city,
                Direccion: adress,
                Provincia: state
            }
          });
       res.status(200).json("Ok")
    } catch (error) {
        res.status(400).json({error: error})
    }
};

module.exports = putShipping;