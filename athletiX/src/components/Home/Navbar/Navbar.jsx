import React from 'react'
import athletix from "../../../assets/AthletiX.png"
import logo from "../../../assets/athletix logo.png"
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';
import items from '../../Cards/items'
import CardBlog from "../../Carousel/CardBlog"
const Navbar = () => {
  
  const carouselBlogs = [...items, ...items]


  return (
    <nav className='flex justify-center shadow-2xl bg-purple-50 border-b border-stone-300'>
  <div className='w-full max-w-7xl px-4 mx-auto flex items-center justify-between'>
    <Link to='/home' className='flex items-center'>
      <div className='hover:scale-110 transition ease-in-out duration-300 py-5 cursor-pointer flex items-center'>
        <img src={logo} alt="logo" className='h-20 w-25 brightness-100' />
        <img src={athletix} alt="athletix" className='h-20 md:block hidden' />
        
      </div>
    </Link>
  </div>
  
  <div className='container my-5'>
    <div className='overflow-hidden w-full'>
      <div className='flex whitespace-nowrap animate-scroll w-10 h-40'>
    {carouselBlogs.map((item, index)=>(<CardBlog blog={item} key={index}/>))}
      </div>
    </div>
  </div>
    <div>
      <Dropdown />
    </div>
</nav>
  );
}

export default Navbar