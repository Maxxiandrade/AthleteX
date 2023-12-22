import React from 'react'

const Searchbar = () => {
  return (
    <>
            
            <h2 className=' md:block hidden font-medium'> Search</h2>
            <input type="text" className=' md:block hidden text-center border border-zinc-200 rounded-md' placeholder='Search an item'/>
    </>
  )
}

export default Searchbar