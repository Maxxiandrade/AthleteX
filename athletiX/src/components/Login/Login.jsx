import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import athletix from "../../assets/athletix logo.png";
import style from "./Login.module.css";
import axios from "axios";


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

  const login = async(e)=>{
    e.preventDefault()
    try {
      console.log(user);
      const url = `http://localhost:3001/user?email=${user.email}&password=${user.password}`;
      const {data} = await axios.get(url)
      navigate('/home')
    } catch (error) {
     if(error.response.data === '1'){
      setErrors({
        errors: 'El correo electrónico no está verificado.'
      })
     }else{
      setErrors({
        errors:'Invalid Email/Password'
      })
     }
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
  <button className="bg-transparent px-10 py-2 rounded-2xl border border-black hover:scale-105 transition duration-200"
  onClick={login}>
                Log in
              </button>
  <br />
  <label htmlFor="">Don't have an account?</label>
  <Link to='/register'>
  <button className="bg-transparent px-10 py-2 rounded-2xl border border-black hover:scale-105 transition duration-200">
                Register
              </button>
  </Link>
</form>
      </div>
    </>
  );
};

export default Login;
