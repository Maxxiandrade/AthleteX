import React from "react";
import { useState } from "react";
import {AiOutlineCaretUp, AiOutlineCaretDown} from "react-icons/ai"
import menu from "../../../assets/menu.svg"
import carrito from "../../../assets/carrito.svg"
import { Link } from "react-router-dom";

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="relative flex flex-col items-center rounded-lg">
      <button onClick={()=>setIsOpen((prev)=>!prev)} className=" p-4 w- flex items-center justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent  active:scale-125 duration-200">
       <img src={menu} alt="menu" className="h-8" />
        {!isOpen ? (
            <AiOutlineCaretDown className="h-8"/>
        ):(
            <AiOutlineCaretUp className="h-8"/>
        )
    }
      </button>
      {isOpen && (
        <div className="bg-zinc-200 absolute top-16 flex flex-col items-center rounded-lg p-2 w-full border border-gray-500 ">
            <Link to='/pucharse'> 
            <img src={carrito} alt="carrito" className="h-8 cursor-pointer hover:scale-110 duration-100 items-center" />
            </Link>
            <hr
            className="my-4 border-gray-600"
            style={{ width: "80%", margin: "20px auto" }}
          />
          <Link to='/login'>
            <p className="cursor-pointer  hover:scale-110 duration-100 font-medium">Log in</p>
          </Link>
            <hr
            className="my-4 border-gray-600"
            style={{ width: "80%", margin: "20px auto" }}
          />
          <Link to='/contactus'>
            <p className="cursor-pointer  hover:scale-110 duration-100 font-medium juce py-1">Contact</p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
