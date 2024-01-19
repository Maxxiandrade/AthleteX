import React from 'react'
import Navbar from '../Home/Navbar/Navbar'
import {useSelector} from 'react-redux'

const Account = () => {
  const userInfo = useSelector((state)=>state.userInfo)
  const {compras, entrega} = userInfo
  const uid = localStorage.getItem('uid')
  const email = localStorage.getItem('email')
  console.log(entrega);  

  function timeStampToDate(timestampObject) {
    const milliseconds = timestampObject.seconds * 1000 + Math.round(timestampObject.nanoseconds / 1e6);
    const fecha = new Date(milliseconds);
    return fecha.toLocaleDateString(); // o cualquier formato que desees
  }

  return (
    <>
    <Navbar/>
    <h2 className='text-lg'>Tus compras:</h2>
    {compras.map((compra, index) => (
  <div key={index}>
    <h3 className='text-sm'>{compra.articulo}</h3>
    <p  className='text-sm'>{compra.precio}</p>
    <p  className='text-sm'>{compra.fecha ? timeStampToDate(compra.fecha) : "Fecha no disponible"}</p>
  </div>
))}
<hr />
<h2>Datos de entrega:</h2>
  {entrega && (
    <>
      <p>{entrega?.Ciudad}</p>
      <p>{entrega?.Provincia}</p>
      <p>{entrega.Direccion}</p>
    </>
  )}
    </>
  )
}

export default Account