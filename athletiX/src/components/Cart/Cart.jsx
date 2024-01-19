import React from "react";
import Navbar from "../Home/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/actions/actions";
import { Link } from "react-router-dom";
import style from "./Cart.module.css";
import cancel from "../../assets/cancel.svg";
import shopcart from "../../assets/shopcart.svg";
import logo from "../../assets/athletix logo.png";
const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const totalPrice = cart
    .reduce((total, item) => total + parseFloat(item.precio), 0)
    .toFixed(2);
  const totalItems = cart.length;

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <>
      <div
        className={`${style.backgroundImage} flex flex-col items-center justify-center`}
      >
        {cart.length ? (
          <h1 className="text-4xl bg-transparent border backdrop-blur-lg rounded-xl  p-6 flex justify-center items-center ">
            Your about to pay ${totalPrice} for {totalItems} item(s)
          </h1>
        ) : (
          <>
            <Link to="/home">
              <div className="text-4xl bg-transparent border backdrop-blur-lg rounded-xl  p-6 flex justify-center items-center ">
                <h1>It's a little bit empty here! Let's get you something..</h1>
                <img src={shopcart} alt="shopcart" className="h-32" />
              </div>
            </Link>
          </>
        )}
        <br />
        {cart.length > 0 ? (
          <div className="bg-transparent border border-stone-200 backdrop-blur-lg rounded-xl  p-6 flex justify-center items-center ">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center justify-center text-center hover:scale-95 transition duration-200"
              >
                <div className="mb-2">
                  <p className="font-semibold">${item.precio}</p>
                </div>
                <div className="mb-2">
                  <Link to={`/article/${item.id}`}>
                    <img
                      src={item.foto}
                      alt="item photo"
                      className="size-36 rounded-full border border-red-700 ml-5"
                    />
                  </Link>
                </div>
                <div>
                  <button
                    className="font-normal h-6 w-6 rounded-full"
                    onClick={() => handleRemove(item.id)}
                  >
                    <img src={cancel} alt="cancel" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
        <br />

        {cart.length > 0 && (
          <div className="flex justify-center">
            <Link to="/home">
              <button className="text-2xl bg-transparent border backdrop-blur-lg rounded-xl p-6 flex justify-center items-center hover:scale-110 transition duration-200 mr-4">
                Home
              </button>
            </Link>
            <Link to="/pay">
              <button className="text-2xl bg-transparent border backdrop-blur-lg rounded-xl p-6 flex justify-center items-center hover:scale-110 transition duration-200">
                Pay
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
