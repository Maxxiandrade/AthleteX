import React from 'react'
import athletix from "../../../assets/AthletiX.png"
import logo from "../../../assets/athletix logo.png"
import Dropdown from './Dropdown';

const Navbar = () => {

  return (
    <nav className='flex justify-center shadow-inner bg-stone-200 border-b border-black'>
    <div className='flex items-center justify-between w-full max-w-7xl px-4 mx-auto'>
      <div className='hover:scale-110 transition ease-in-out duration-300 py-5 cursor-pointer '>
        <img src={athletix} alt="athletix" className='h-20 md:block hidden' />
        <img src={logo} alt="logo" className='h-20 w-25 sm:block md:hidden' />
      </div>
      <div className='flex justify-end'>
        <Dropdown />
      </div>
    </div>
  </nav>
  );
}

export default Navbar