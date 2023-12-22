import React from "react";
import style from './Contact.module.css'
import Navbar from "../Home/Navbar/Navbar";

const Contact = () => {
  

  
  return (
    <>
    <div className={style.backgroundImage}>
      <Navbar/>
      {" "}
      {/* Div Contact*/}
      <h2 className="flex justify-center text-3xl">Get in touch</h2>
      <form >
        <label class="block">
          <span class="block text-sm font-medium text-slate-700">From</span>
          <input
            type="text"
            class="peer ..."
            name="from"
           
            placeholder="your@email.com"
            className={`max-w-screen-md rounded-md w-full text-center`}
            />
          
        </label>
        <label class="block">
          <span class="block text-sm font-medium text-slate-700">To</span>
          <input
            type="email"
            class="peer ..."
            name="to"
            value="maxiandrade62@gmail.com"
            readOnly
            className="placeholder-slate-500 max-w-screen-md rounded-md w-full text-center cursor-not-allowed"
            />
        </label>
        <label class="block">
          <span class="block text-sm font-medium text-slate-700">Subject</span>
          <input
            type="subject"
            class="peer ..."
            name="subject"
            
            placeholder="Subject line that catches attention"
            className="max-w-screen-md rounded-md w-full text-center"
            />
         
        </label>

        <label class="block">
          <span class="block text-sm font-medium text-slate-700">Text</span>
          <textarea
            class="peer ..."
            name="text"
           
            placeholder="Tell me everything"
            className="max-w-screen-md rounded-md w-full h-28 placeholder:text-center resize-none"
            />
          
        </label>
        <br />
        <button
        
         
          >
          
        </button>
      </form>
      <div className="flex justify-end px-5 ">
      <button  className="hover:scale-105  transition-transform duration-300 ease-in-out" >
        
      </button>
      </div>
      
      <br />
    </div>
          </>
  );
};

export default Contact;
