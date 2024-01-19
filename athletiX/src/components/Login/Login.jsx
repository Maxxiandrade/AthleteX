import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import athletix from "../../assets/athletix logo.png";
import style from "./Login.module.css";
import { auth } from "../../firebase-config";
import {signInWithEmailAndPassword } from "firebase/auth";


const Login = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    email:'',
    password:''
  })

  const [errors, setErrors] = useState({
    errors:''
  })
  const handleLogin = ({target})=>{
    const {name, value} = target;
    setUser({
      ...user,
      [name]:value
    })
  }

  const isDisabled =
  !user.email ||
  !user.password;

  const login = async(e)=>{
    e.preventDefault()
    try {
      const result = await signInWithEmailAndPassword(auth, user.email, user.password);
      const isEmailVerified = result.user.emailVerified;
      if (isEmailVerified) {
        localStorage.setItem('uid', auth?.currentUser?.uid);
        localStorage.setItem('email', result.user.email)
        navigate('/home')
      } else {
        setErrors({
          errors:'El correo no esta verificado'
        })
      }
      console.log(result.user);
    } catch (error) {
      setErrors({
        errors:'Correo / Contraseña invalidos'
      })
    }
  }
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
    <form action="">
  <div className='mb-4'>
    <label htmlFor="email">Email:</label>
    <br />
    <input 
      placeholder="example@example.com"
      type="text" 
      name="email" 
      id="email"
      className="border border-black rounded-lg text-center"
      value={user.email}
      onChange={handleLogin}
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
      value={user.password}
      onChange={handleLogin}
      />
  </div>
      </form>
      {errors && <p>{errors.errors}</p>}
  <button className={`bg-transparent px-10 py-2 rounded-2xl border border-black hover:scale-105 transition duration-200 ${
              isDisabled
                ? "hover:border-red-500 transition-transform duration-300"
                : "hover:border-green-500 "
            }`}
  onClick={login} disabled={!user.email || !user.password}>
                Log in
              </button>
  <br />
  <label htmlFor="">Don't have an account?</label>
  <Link to='/register'>
  <button className="bg-transparent px-10 py-2 rounded-2xl border border-black hover:scale-105 transition duration-200" >
                Register
              </button>
  </Link>
</form>
      </div>
    </>
  );
};

export default Login;
