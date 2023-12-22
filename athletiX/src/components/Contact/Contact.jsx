import React from "react";
import style from "./Contact.module.css";
import Navbar from "../Home/Navbar/Navbar";
import { Link } from "react-router-dom";
import athletix from "../../assets/athletix logo.png";

const Contact = () => {
  return (
    <>
      <div className="">
        <div
          className={`${style.backgroundImage} flex flex-col items-center justify-center  `}
        >
          <h2 className=" text-3xl">Contact us</h2>
          <br />
          <form className="bg-transparent border backdrop-blur-lg rounded-xl p-6 w-64">
          <div className="flex flex-col items-center justify-start mb-2 hover:scale-125 transition duration-200">
            <Link to="/home">
              <img
                src={athletix}
                alt="logo"
                className="h-10  justify-start items-start"
              />
            <p className="font-medium">AthletiX</p>
            </Link>
            </div>
            <label class="block">
              <span class="block text-sm font-medium text-black">From</span>
              <input
                type="text"
                class="peer ..."
                name="from"
                placeholder="your@email.com"
                className={`max-w-screen-md rounded-md w-full text-center border border-black`}
              />
            </label>
            <label class="block">
              <span class="block text-sm font-medium text-black">To</span>
              <input
                type="email"
                class="peer ..."
                name="to"
                value="athletix@contact.com"
                readOnly
                className="placeholder-slate-500 max-w-screen-md rounded-md w-full text-center cursor-not-allowed  border border-black"
              />
            </label>
            <label class="block">
              <span class="block text-sm font-medium text-black">Subject</span>
              <input
                type="subject"
                class="peer ..."
                name="subject"
                placeholder="What's going on?"
                className="max-w-screen-md rounded-md w-full text-center  border border-black"
              />
            </label>

            <label class="block">
              <span class="block text-sm font-medium text-black">Text</span>
              <textarea
                class="peer ..."
                name="text"
                placeholder="Tell us everything"
                className="max-w-screen-md rounded-md w-full h-16  border border-black placeholder:text-center resize-none"
              />
            </label>
            <br />
            <div className="flex justify-center px-5 ">
              <button className="bg-transparent px-10 py-2 rounded-2xl border border-black hover:scale-105 transition duration-200">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
