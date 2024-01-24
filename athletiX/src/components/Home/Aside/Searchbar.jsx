import React, { useEffect } from 'react'
import { useState } from 'react'
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";
import { useDispatch } from 'react-redux';
import { getByName, getItems } from '../../../redux/actions/actions';

const Searchbar = () => {
  const dispatch = useDispatch()
  const [toggleSearch, setToggleSearch] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [string, setString] = useState('')
  const search = ()=>{
    
    setToggleSearch((prev)=>!prev)
  }

  const handleSearch = (e) => {
    e.preventDefault();
  
    if (string) {
      const capitalizedString = capitalizeFirstLetter(string);
      dispatch(getByName(capitalizedString));
    }
  };
  
  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const handleString = (e)=>{
    setString(e.target.value)
  }

  useEffect(()=>{
    if(string < 3){
      dispatch(getItems())
    }
    if(string > 3){
      dispatch(getByName(capitalizedString))
    }
  },[string])
  return (
    <>
            
            <h2 className=' cursor-pointer font-medium flex items-center border-b border-stone-400' onClick={search}> {toggleSearch ? <p className='text-indigo-600'>Search</p> : <p>Search</p>} {toggleSearch ? <HiChevronUp /> : <HiChevronDown />}</h2>
            { toggleSearch ?
            <form action="" onSubmit={handleSearch}>
              <input type="text" className=' md:block hidden text-center border border-zinc-200 rounded-md h-9' placeholder='Search an item' value={string} onChange={handleString}/> 
            </form>
              : ''}
    </>
  )
}

export default Searchbar