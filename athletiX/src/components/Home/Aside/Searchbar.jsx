import React from 'react'
import { useState } from 'react'
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";

const Searchbar = () => {
  const [toggleSearch, setToggleSearch] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const search = ()=>{
    
    setToggleSearch((prev)=>!prev)
  }
  return (
    <>
            
            <h2 className=' cursor-pointer font-medium flex items-center border-b border-stone-400' onClick={search}> {toggleSearch ? <p className='text-indigo-600'>Search</p> : <p>Search</p>} {toggleSearch ? <HiChevronUp /> : <HiChevronDown />}</h2>
            { toggleSearch ?
              <input type="text" className=' md:block hidden text-center border border-zinc-200 rounded-md h-9' placeholder='Search an item'/> : ''}
    </>
  )
}

export default Searchbar