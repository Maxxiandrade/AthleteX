import React from 'react';
import Navbar from '../Home/Navbar/Navbar';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { useSelector } from 'react-redux';

const stripePromise = loadStripe("pk_test_51Oc3uyJpb4pFNcZPWLhILwnrgkHquNnCVarPZopJMuZW1WyKfpxhXOq2Ca2t6l1bt9N5CarOuFHPEG34z4K1YXHc00MWez6LBY");

const CheckoutForm = (price) => {

  const cart = useSelector((state) => state.cart);
  const email = localStorage.getItem('email')
  const totalPrice = cart
    .reduce((total, item) => total + parseFloat(item.precio), 0)
    .toFixed(2);

  const stripe = useStripe();
  const elements = useElements();
  console.log(cart);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)
    });

    if (!error) {
      const {id} = paymentMethod
      const {data} = await axios.post('http://localhost:3001/checkout', {
        email,
        id,
        amount: totalPrice,
        cart
      })
    }
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      {totalPrice}
      <CardElement />
      <button type="submit">Pay</button>
    </form>
  );
};

const Pay = (price) => {
  return (
    <>
      <Navbar />
      <Elements stripe={stripePromise}>
        <CheckoutForm price={price}/>
      </Elements>
    </>
  );
};

export default Pay;
