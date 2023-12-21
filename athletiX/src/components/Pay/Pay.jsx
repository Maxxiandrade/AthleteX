import React from 'react'
import Navbar from '../Home/Navbar/Navbar'
import items from '../Cards/items'
import { useParams } from 'react-router-dom'
const Pay = () => {
  const {id} = useParams() 
  
  const item = items.filter((item)=>item.id == id)
  return (
    <>
    <Navbar/>
    <div className='flex'>
      {item.map((item)=>{return(
        <>
        <img src={item.foto} alt="" />
        <h1 className='text-4xl'>Your about to pay {item.precio} for {item.nombre}</h1>
        <br />
        
        </>
      )})}
    </div>
    </>
  )
}

export default Pay