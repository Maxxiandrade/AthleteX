const Stripe = require('stripe');

const postCheckout = async (req, res) => {
  const stripe = new Stripe('sk_test_51Oc3uyJpb4pFNcZPf0rziQClHn3S76NBO5EhuFuVWeGPtEGFzOCE8zZUh05a8KivTOpsD98lpCtDOzHAHSfkMT2Z00N3vL1EaZ');
  
  try {
    const { id, amount } = req.body;

    // Convert amount to the smallest unit (e.g., cents for USD)
    const amountInCents = Math.round(amount * 100);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountInCents,
      currency: 'USD',
      description: 'Gaming keyboard',
      payment_method: id,
      confirm: true,
      return_url: 'https://localhost:3001/checkout/success', // Replace with your actual success URL
    });

    console.log(paymentIntent);
    res.status(200).json('recibido');
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.raw.message });
  }
};

module.exports = postCheckout;