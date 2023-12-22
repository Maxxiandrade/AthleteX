import React from 'react'
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='flex shadow-2xl bg-gradient-to-r from-violet-200 to-violet-100 text-stone-900 text-center font-thin justify-center'>
        Developed and designed by Maximiliano Andrade
        <div className='mt-1 ml-1'>
            <a href="https://www.linkedin.com/in/maximiliano-andrade-8ab0b6213/" target='_blank'>

        <FaLinkedin />
            </a>
        </div>
    </footer>
  )
}

export default Footer