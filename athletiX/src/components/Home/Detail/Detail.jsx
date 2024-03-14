import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { useParams, useNavigate } from 'react-router-dom'
import carrito from "../../../assets/carrito.svg"

import { addToCart } from '../../../redux/actions/actions'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import shopcart from "../../../assets/shopcart.svg"
import { TbShoppingCartX, TbEraserOff } from "react-icons/tb";
import pen from "../../../assets/pen.svg"
import axios from 'axios'
import done from "../../../assets/done.svg"
import { API_URL } from '../../Acount/Adress'

const Detail = () => {
  const navigate = useNavigate()
    const dispatch = useDispatch()
    const {id} = useParams()
    const items = useSelector((state)=>state.allItems)
    const item = items.filter((item)=>item.id == id)
    const user = useSelector((state) => state.userInfo);
    const isAdmin = user.isAdmin;
    const [price, setPrice] = useState(item[0]?.precio)
    const [togglePrice, setTogglePrice] = useState(false)

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

    const handlePrice = (e) => {
      const newPrice = e.target.value;
      setPrice((prevPrice) => {
        // Use the previous price to update state
        if (prevPrice !== newPrice) {
          updatePrice(id, newPrice);
        }
        return newPrice;
      });
    };
    
    const updatePrice = async (id, newPrice) => {
      try {
        await axios.put(`${API_URL}/price`, {
          id,
          price: newPrice
        });
      } catch (error) {
        throw Error(error);
      }
    };
    
    const handleDone = () => {
      Swal.fire({
        title: 'Price updated successfully!',
        showConfirmButton: true,
        confirmButtonText: 'Ok!'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/admin');
        }
      });
      setTogglePrice(false);
    };
    
    const outOfStock = () => {
      setPrice((prevPrice) => {
        if (prevPrice !== 0) {
          updatePrice(id, 0);
        }
        return 0;
      });
    
      Swal.fire({
        title: 'Removed from stock successfully!',
        showConfirmButton: true,
        confirmButtonText: 'Ok!'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/admin');
        }
      });
    };

    const deleteItem = async () => {
      try {
        Swal.fire({
          title: 'You are about to delete this item. Are you sure?',
          showConfirmButton: true,
          confirmButtonText: 'Yes, I\'m sure',
          showDenyButton: true,
          denyButtonText: 'Cancel'
        }).then(async(result)=>{
        if (result.isConfirmed) {
          await axios.delete(`${API_URL}/deleteitem`, { data: { id } });
          Swal.fire({
            title:'Item deleted successfully'
          }
         )
         navigate('/admin')} else if (result.isDenied) {
          console.log('Deletion canceled');
        }})

      } catch (error) {

      }
    };
    
    
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
              {<p className="ml-3">Price: $ {togglePrice ? <input type='text' className='w-24' onChange={handlePrice} value={price}/> : item.precio}</p>}
              <button className='hover:scale-110'>
                <img src={carrito} alt="" className='size-10' onClick={() => handleAddToCart(item.id)} />
              </button>
              {isAdmin && 
              <>
              {togglePrice ? <img src={done} name='confirm' className='h-8 cursor-pointer hover:scale-110' onClick={handleDone}/> :
               <img src={pen} alt="" className='h-8 cursor-pointer hover:scale-110' onClick={()=>setTogglePrice(!togglePrice)}/>}
              <TbShoppingCartX className='cursor-pointer hover:scale-110' onClick={()=>outOfStock()}/>
              <TbEraserOff className='cursor-pointer hover:scale-110' onClick={()=>deleteItem()}/>
              </>}
              
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