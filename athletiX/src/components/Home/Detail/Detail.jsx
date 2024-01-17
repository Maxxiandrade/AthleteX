import React from 'react'
import Navbar from '../Navbar/Navbar'
import items from "../../Cards/items"
import { redirect, useParams, useNavigate } from 'react-router-dom'
import carrito from "../../../assets/carrito.svg"
import { Link } from 'react-router-dom'
import { addToCart } from '../../../redux/actions/actions'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import shopcart from "../../../assets/shopcart.svg"

const Detail = () => {
  const navigate = useNavigate()
    const dispatch = useDispatch()
    const {id} = useParams()
    const items = useSelector((state)=>state.allItems)
    const item = items.filter((item)=>item.id == id)
    console.log(item);

    const handleAddToCart = (id)=>{
      Swal.fire({
        title: 'Added to your cart succesfully!',
        showConfirmButton:true,
        confirmButtonText:'Ok!',
        confirmButtonColor:'#a78bfa',
        showDenyButton:true,
        denyButtonColor:'#a78bfa',
        denyButtonText: '<img src="' + shopcart + '" class="h-6">',
        showCancelButton: true
      }).then((result)=>{
        if(result.isConfirmed){dispatch(addToCart(id))}
        if(result.isDenied){
          dispatch(addToCart(id))
          navigate('/cart')
        }
      })
      
    }

  return (
    <>
  <Navbar/>
  <div className='flex items-center text-4xl py-10'>
    {item.map(item => {
      return (
        <div className="flex">
          <img src={item.foto} alt="item foto" className='size-96 rounded-full object-contain ' />
          <div className="ml-5">
            <h1>{item.nombre}</h1>
            <h2>{item.marca}</h2>
            <br />
            <p>{item.descripcion}</p>
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