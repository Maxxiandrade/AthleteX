import React, { useEffect, useState } from "react";
import style from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import athletix from "../../assets/athletix logo.png";
import Swal from "sweetalert2";
import registerValidations from "./registerValidations";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();

  const [isRegistered, setIsRegistered] = useState(false);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleRegister = ({ target }) => {
    const { name, value } = target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const submitRegister = async (e) => {
    e.preventDefault();
    console.log(credentials);
    setCredentials({
      email: "",
      password: "",
    });
    Swal.fire({
      title: "A confirmation email has been sent!",
      text: "Please verify your inbox and spam folder.",
    });
    await axios.post("http://localhost:3001/register", credentials);
    setIsRegistered(true)
    navigate('/login')
  };

  useEffect(() => {
    if (credentials.email !== "" || credentials.password !== "") {
      const userValidated = registerValidations(credentials);
      setErrors(userValidated);
    }
  }, [credentials]);

  const isDisabled =
    errors.email ||
    errors.password ||
    !credentials.email ||
    !credentials.password;

 
  return (
    <>
      <div
        className={`${style.backgroundImage} flex items-center justify-center h-screen`}
      >
        <form className="bg-transparent border backdrop-blur-lg rounded-xl w-96 p-6 flex flex-col justify-center items-center h-96">
          <Link to="/home">
            <img
              src={athletix}
              alt="logo"
              className="h-10 hover:scale-125 transition duration-200"
            />
          </Link>
          <br />
          <div className="mb-4">
            <label htmlFor="email">Email:</label>
            <br />
            <input
              placeholder="example@example.com"
              type="text"
              name="email"
              id="email"
              className="border border-black rounded-lg text-center"
              value={credentials.email}
              onChange={handleRegister}
            />
            {errors.email !== "" && <p className="text-lg">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="password">Password:</label>
            <br />
            <input
              placeholder="This field is obligatory*"
              type="password"
              name="password"
              id="password"
              className="border border-black rounded-lg text-center"
              value={credentials.password}
              onChange={handleRegister}
            />
            {errors.password !== "" && <p className="">{errors.password}</p>}
          </div>
          <button
            className={`bg-transparent px-10 py-2 rounded-2xl border border-black hover:scale-105 transition duration-200 ${
              isDisabled
                ? "hover:border-red-500 transition-transform duration-300"
                : "hover:border-green-500 "
            }`}
            onClick={submitRegister}
            disabled={
              errors.email ||
              errors.password ||
              !credentials.email ||
              !credentials.password
            }
          >
            Register
          </button>
          <br />
        </form>
      </div>
    </>
  );
};

export default Register;
