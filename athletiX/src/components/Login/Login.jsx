import React from "react";
import { Link } from "react-router-dom";
import athletix from "../../assets/athletix logo.png";
import style from "./Login.module.css";

const Login = () => {
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
    <input 
      placeholder="example@example.com"
      type="text" 
      name="email" 
      id="email"
    />
  </div>
  <div className='mb-4'>
    <label htmlFor="password">Password:</label>
    <input 
      placeholder="This field is obligatory*"
      type="password" 
      name="password" 
      id="password"
    />
  </div>
  <button type="submit" className="bg-cyan-300">Log in</button>
  <br />
  <label htmlFor="">Don't have an account?</label>
  <Link to='/register'>
    <button className='bg-cyan-300'>Register</button>
  </Link>
</form>
      </div>
    </>
  );
};

export default Login;
