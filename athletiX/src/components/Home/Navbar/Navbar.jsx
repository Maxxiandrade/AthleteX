import React from 'react'
import athletix from "../../../assets/AthletiX.png"
import logo from "../../../assets/athletix logo.png"
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';
const Navbar = () => {

  return (
    <nav className='flex justify-center shadow-2xl bg-stone-200 border-b border-stone-300'>
    <div className='flex items-center justify-between w-full max-w-7xl px-4 mx-auto'>
      <Link to='/home'>
      <div className='hover:scale-110 transition ease-in-out duration-300 py-5 cursor-pointer '>
        <img src={athletix} alt="athletix" className='h-20 md:block hidden' />
        <img src={logo} alt="logo" className='h-20 w-25 sm:block md:hidden' />
      </div>
      </Link>
      <div className='flex justify-end'>
        <Dropdown />
      </div>
    </div>
  </nav>
  );
}

export default Navbar