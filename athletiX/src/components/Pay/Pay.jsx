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
      <Navbar />
      <div className='flex flex-col items-center justify-center'>
        {cart.length ? (
          <h1 className='text-4xl'>
            Your about to pay ${totalPrice} for {totalItems} item(s)
          </h1>
        ) : (
          <h1 className='text-4xl'>
            It's a little bit empty here! Let's get you something..
          </h1>
        )}
        <div className='flex flex-wrap justify-center gap-4'>
          {cart.map(item => (
            <div key={item.id}>
              <Link to={`/article/${item.id}`}>
                <img
                  src={item.foto[0]}
                  alt="item photo"
                  className='size-36 rounded-full'
                />
              </Link>
              <p>{item.precio}</p>
              <button
                className='text-3xl bg-cyan-400 rounded-full'
                onClick={() => handleRemove(item.id)}
              >
                X
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Pay