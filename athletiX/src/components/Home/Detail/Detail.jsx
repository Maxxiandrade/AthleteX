import React from 'react'
import Navbar from '../Navbar/Navbar'
import items from "../../Cards/items"
import { useParams } from 'react-router-dom'
import carrito from "../../../assets/carrito.svg"
import { Link } from 'react-router-dom'

const Detail = () => {
    
    const {id} = useParams() 
  
    const item = items.filter((item)=>item.id == id)
    console.log(item);
  return (
    <>
        <Navbar/>
    <div className='flex justify-start items-center text-4xl py-10'>
      {
        item.map(item=>{return(
            <>
            <img src={item.foto} alt="item foto" className='size-1/3'  />
            <h1 className='p-5'>{item.nombre}</h1>
            <br />
            <h2>{item.marca}</h2>
            <p>{item.especificaciones}</p>
            <Link to={`/pucharse/${item.id}`}>
            <button className='hover:scale-110'>
            <img src={carrito} alt="" className='size-10'/>
            </button>
            </Link>
            <p>{item.precio}</p>
            </>
        )})
      }
    </div>
    </>
  )
}

export default Detail