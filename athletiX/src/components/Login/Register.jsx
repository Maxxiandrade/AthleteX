import React from "react";
import style from "./Login.module.css";
import { Link } from "react-router-dom";
import athletix from "../../assets/athletix logo.png";

const Register = () => {
  return (
    <>
    <div
      className={`${style.backgroundImage} flex items-center justify-center h-screen`}
    >
      <form className='bg-transparent border backdrop-blur-lg rounded-xl w-96 p-6 flex flex-col justify-center items-center h-96'>
<Link to='/home'>
<img src={athletix} alt="logo" className="h-10 hover:scale-125 transition duration-200"/>
</Link>
<br />
<div className='mb-4'>
  <label htmlFor="email">Email:</label>
  <br />
  <input 
    placeholder="example@example.com"
    type="text" 
    name="email" 
    id="email"
    className="border border-black rounded-lg text-center"
  />
</div>
<div className='mb-4'>
  <label htmlFor="password">Password:</label>
  <br />
  <input 
    placeholder="This field is obligatory*"
    type="password" 
    name="password" 
    id="password"
    className="border border-black rounded-lg text-center"
  />
</div>
<button className="bg-transparent px-10 py-2 rounded-2xl border border-black hover:scale-105 transition duration-200">
                Register
              </button>
<br />
</form>
    </div>
  </>
  );
};

export default Register;
