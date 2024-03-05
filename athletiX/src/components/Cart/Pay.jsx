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

  const cardElementOptions = {
    style: {
      base: {
        fontSize: '16px',
        color: '#424770',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#9e2146',
      },
    },
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <div className="bg-indigo-400 p-8 rounded-lg w-96">
        {totalPrice}
        <CardElement className="mt-4" />
        <button type="submit" className="bg-indigo-900 rounded-md px-8 py-3 mt-4 text-white text-lg">Pagar</button>
      </div>
    </form>
  );
};

const Pay = () => {
  return (
    <>
      <Navbar />
      <div className="grid place-items-center ">
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </>
  );
};

export default Pay;
