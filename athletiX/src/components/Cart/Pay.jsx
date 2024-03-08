import React from 'react';
import Navbar from '../Home/Navbar/Navbar';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { clearCart } from '../../redux/actions/actions';
import { useDispatch } from 'react-redux';
const stripePromise = loadStripe("pk_test_51Oc3uyJpb4pFNcZPWLhILwnrgkHquNnCVarPZopJMuZW1WyKfpxhXOq2Ca2t6l1bt9N5CarOuFHPEG34z4K1YXHc00MWez6LBY");

const CheckoutForm = (price) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
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
      const { id } = paymentMethod;
      Swal.fire({
        title: 'Procesando tu pago...',
        allowOutsideClick: false,
        onBeforeOpen: () => {
          Swal.showLoading();
        }
      });

      axios.post('http://localhost:3001/checkout', {
        email,
        id,
        amount: totalPrice,
        cart
      })
      .then(response => {
        // Verificar si el pago fue recibido
        if (response.data === "recibido") {
          // Ocultar alerta de procesamiento
          Swal.close();

          // Mostrar alerta de pago exitoso
          Swal.fire({
            icon: 'success',
            title: 'Pago realizado exitosamente!',
          }).then(() => {
            // Redirigir al usuario a la página de inicio
            dispatch(clearCart())
            navigate('/home');
          });
          if(response.data!== "recibido"){
            Swal.fire({
              icon: 'error',
              title: 'Hubo un error al procesar el pago. Por favor, inténtalo nuevamente. Si el problema persiste, contáctenos',
            })
          }
        }
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
      <div className="bg-indigo-200 p-8 rounded-lg w-96  border-4 border-blue-400 my-5">
        $ {totalPrice}
        <CardElement className="mt-4" />
        <button type="submit" className="bg-indigo-600 rounded-md px-8 py-3 mt-4 text-white text-lg hover:scale-105 transition">Pagar</button>
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
