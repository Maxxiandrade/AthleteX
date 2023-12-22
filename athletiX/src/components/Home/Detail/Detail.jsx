import React from 'react'
import Navbar from '../Navbar/Navbar'
import items from "../../Cards/items"
import { useParams } from 'react-router-dom'
import carrito from "../../../assets/carrito.svg"
import { Link } from 'react-router-dom'
import { addToCart } from '../../../redux/actions/actions'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'

const Detail = () => {
    const dispatch = useDispatch()
    const {id} = useParams()
    const items = useSelector((state)=>state.allItems)
    const item = items.filter((item)=>item.id == id)
    console.log(item);

    const handleAddToCart = (id)=>{
      Swal.fire({
        title: 'Added succesfully!',
        showConfirmButton:true
      })
      dispatch(addToCart(id))
    }

  return (
    <>
  <Navbar/>
  <div className='flex items-center text-4xl py-10'>
    {item.map(item => {
      return (
        <div className="flex">
          <img src={item.foto[0]} alt="item foto" className='size-96 rounded-full ' />
          <div className="ml-5">
            <h1>{item.nombre}</h1>
            <h2>{item.marca}</h2>
            <br />
            <p>{item.especificaciones}</p>
            <br />
            <div className="flex items-center">
              <p className="ml-3">Price: ${item.precio}</p>
              <button className='hover:scale-110'>
                <img src={carrito} alt="" className='size-10' onClick={() => handleAddToCart(item.id)} />
              </button>
            </div>
          </div>
        </div>
      );
    })}
  </div>
</>
  )
}

export default Detail