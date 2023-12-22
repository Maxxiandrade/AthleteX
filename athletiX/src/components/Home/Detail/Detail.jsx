import React from 'react'
import Navbar from '../Navbar/Navbar'
import items from "../../Cards/items"
import { useParams } from 'react-router-dom'
import carrito from "../../../assets/carrito.svg"
import { Link } from 'react-router-dom'
import { addToCart } from '../../../redux/actions/actions'
import { useDispatch, useSelector } from 'react-redux'

const Detail = () => {
    const dispatch = useDispatch()
    const {id} = useParams()
    const items = useSelector((state)=>state.allItems)
    const item = items.filter((item)=>item.id == id)
    console.log(item);

    const handleAddToCart = (id)=>{
      dispatch(addToCart(id))
    }

  return (
    <>
        <Navbar/>
    <div className='flex justify-start items-center text-4xl py-10'>
      {
        item.map(item=>{return(
            <>
            <img src={item.foto[0]} alt="item foto" className='size-1/3 rounded-full'  />
            <h1 className='p-5'>{item.nombre}</h1>
            <br />
            <h2>{item.marca}</h2>
            <p>{item.especificaciones}</p>
            <button className='hover:scale-110'>
            <img src={carrito} alt="" className='size-10' onClick={() => handleAddToCart(item.id)}/>
            </button>
            <p>{item.precio}</p>
            </>
        )})
      }
    </div>
    </>
  )
}

export default Detail