import React from 'react'
import { useSelector } from 'react-redux';

const Pucharses = () => {
  const userInfo = useSelector((state) => state.userInfo);
  const { compras } = userInfo;
  const {entrega} = userInfo
  console.log(entrega);
  console.log(compras);
  return (
    <>
    <div>
        <h2 className='text-3xl'>Compras con evío pendiente:</h2>
        {compras?.map((compra, index) => (
       <div key={index} className="flex items-center mx-2 py-2">
       <img src={compra.foto} alt="" className="h-20 rounded-full" />
       <div className="ml-4">
         <h3 className="text-sm">{compra.articulo}</h3>
         <p className="text-sm">{compra.email}</p>
         <p className="text-sm">
           
         </p>
       </div>
     </div>
      ))}
    </div>
    </>
  )
}

export default Pucharses