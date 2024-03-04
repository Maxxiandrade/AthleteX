import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPucharses } from '../../redux/actions/actions';

const Pucharses = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPucharses());
  }, [dispatch]); // Dispatch solo al montar el componente

  const pucharses = useSelector((state) => state.pucharses);
  console.log(pucharses);

  return (
    <>
       <div>
        <h2 className='text-3xl'>Compras con envío pendiente:</h2>
        {pucharses?.map((compra, index) => (
          <div key={index} className="flex items-center mx-2 py-2">
            <img src={compra.foto} alt="" className="h-20 rounded-full" />
            <div className="ml-4">
              <h3 className="text-sm">{compra.nombre}</h3>
              <p className="text-sm">{compra.email}</p>
              <p className="text-sm">Dirección de entrega: {compra.entrega.direccion}, {compra.entrega.ciudad} - {compra.entrega.provincia}</p>
              <h4>Items a entregar:</h4>
              <ul>
                {compra?.compras?.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <img src={item.foto} alt="" className="h-20 rounded-full" />
                    {item.nombre}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Pucharses;
