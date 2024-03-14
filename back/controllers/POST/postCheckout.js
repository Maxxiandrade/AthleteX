const Stripe = require('stripe');
const { updateDoc, doc, getDoc } = require('firebase/firestore');
const { db } = require('../../firebase-config');

const postCheckout = async (req, res) => {
  const stripe = new Stripe('sk_test_51Oc3uyJpb4pFNcZPf0rziQClHn3S76NBO5EhuFuVWeGPtEGFzOCE8zZUh05a8KivTOpsD98lpCtDOzHAHSfkMT2Z00N3vL1EaZ');

  try {
    const { email, id, amount, cart } = req.body;

    // Convert amount to the smallest unit (e.g., cents for USD)
    const amountInCents = Math.round(amount * 100);
    const itemNames = cart.map(item => item.nombre).join(', ');

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountInCents,
      currency: 'USD',
      description: itemNames,
      payment_method: id,
      confirm: true,
      return_url:` ${API_URL}/checkout/success`,
    });

    const usersRef = doc(db, 'users', email);

    // Retrieve existing data from the user document
    const userDoc = await getDoc(usersRef);
    const existingCompras = userDoc.exists() ? userDoc.data().compras || [] : [];

    // Combine existingCompras with the new items from the cart
    const updatedCompras = [...existingCompras, ...cart.map(compra => ({ nombre: compra.nombre, foto: compra.foto }))];

    // Update only the compras field without affecting the rest of the document
    await updateDoc(usersRef, { compras: updatedCompras });

    res.status(200).json('recibido');
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.raw.message });
  }
};

module.exports = postCheckout;

