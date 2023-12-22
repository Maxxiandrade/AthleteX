import React from 'react'
import Navbar from '../Home/Navbar/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../../redux/actions/actions'
import { Link } from 'react-router-dom'
const Pay = () => {
  const dispatch = useDispatch()
  const cart = useSelector((state)=>state.cart)
 
  const totalPrice = cart.reduce((total, item) => total + item.precio, 0).toFixed(2);
  const totalItems = cart.length
 

  const handleRemove = (id)=>{
    dispatch(removeFromCart(id))
  }

  return (
    <>
    <Navbar/>
    <div className='flex'>
      {cart.length ?  
      <h1 className='justify-center text-4xl'>Your about to pay ${totalPrice} for {totalItems} items</h1>
      : <h1 className='justify-center text-4xl'>Oops.. seems a little bit empty here! Lets get something</h1>}<br />
      {cart.map(item=>{
        return(
          <>
          <Link to={`/article/${item.id}`}>
          <img src={item.foto[0]} alt="item photo" className='size-36 rounded-full'/>
          </Link>
          <p>{item.precio}</p>
          <button className='text-3xl bg-cyan-400 rounded-full' onClick={()=>handleRemove(item.id)}>X</button>
          
          </>
        )
      })}
    </div>
    </>
  )
}

export default Pay