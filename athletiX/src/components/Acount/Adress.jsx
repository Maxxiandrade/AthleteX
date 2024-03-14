import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";

const Adress = () => {
  const userInfo = useSelector((state) => state.userInfo);
  const email = localStorage.getItem('email')
  console.log(email);
  localStorage.setItem('info', userInfo)
  const { entrega } = userInfo;
  const [editInfo, setEditInfo] = useState(false)
  const [info, setInfo] = useState({
    state:entrega?.provincia,
    city:entrega?.ciudad,
    adress:entrega?.direccion
  })

   const toggleEdit = ()=>{
    setEditInfo(!editInfo)
    updateShippingInfo()
  }

  const changeInfo = async({target})=>{
    const {name, value} = target
    setInfo({
      ...info,
      [name]: value
    })
  }

  const updateShippingInfo = async () => {
    try {
      await axios.put('http://localhost:3001/shipping', {
        email,
        state: info.state,
        city: info.city,
        adress: info.adress,
      });
      console.log('Información de envío actualizada correctamente');
    } catch (error) {
      console.error('Error al actualizar la información de envío', error);
    }
  };
  return (
    <>
      {entrega ? (
        <>
          <h2 className="text-3xl mx-1">Datos de entrega:</h2>
          {entrega && (
            <>
            {!editInfo ? <div className="mx-2">
             <p className="text-lg my-2">Provincia: {info.state}</p>
              <p className="text-lg  my-2">Ciudad: {info.city}</p>
              <p className="text-lg  my-2">Dirección: {info.adress}</p>
              <b className="text-sm underline hover:text-blue-700 cursor-pointer" onClick={toggleEdit}>Editar info</b>
            </div> : 
            <>
            <b className="text-red-700">Asegurate de poner la direccion correcta. En caso de extravío Athletix no toma responsabilidad</b>
           <form action="" className="ml-1" onSubmit={changeInfo}>
            <label htmlFor="" className="text-lg">State: <input type="text" name="state" className="rounded-md border border-stone-400 my-1" value={info.state} onChange={changeInfo}/></label>
            <br />
            <label htmlFor="" className="text-lg">City: <input type="text" name="city" className="rounded-md border border-stone-400 my-1" value={info.city} onChange={changeInfo}/></label>
            <br />
            <label htmlFor="" className="text-lg">Adress: <input type="text" name="adress" className="rounded-md border border-stone-400 my-1" value={info.adress} onChange={changeInfo}/></label>
            <br />
            <b className="text-sm underline hover:text-blue-700 cursor-pointer" onClick={toggleEdit}>Listo</b>
            </form>
            </>}  
            </>
          )}
        </>
      ) : (
        <>
        {!editInfo ? <div className="mx-2">
             <p className="text-lg my-2">Provincia: {info.state}</p>
              <p className="text-lg  my-2">Ciudad: {info.city}</p>
              <p className="text-lg  my-2">Dirección: {info.adress}</p>
              <b className="text-sm underline hover:text-blue-700 cursor-pointer" onClick={toggleEdit}>Edit info</b>
            </div> : 
            <>
            <b className="text-red-700">Asegurate de poner la direccion correcta. En caso de extravío Athletix no toma responsabilidad</b>
           <form action="" className="ml-1" onSubmit={changeInfo}>
            <label htmlFor="" className="text-lg">State: <input type="text" name="state" className="rounded-md border border-stone-400 my-1" value={info.state} onChange={changeInfo}/></label>
            <br />
            <label htmlFor="" className="text-lg">City: <input type="text" name="city" className="rounded-md border border-stone-400 my-1" value={info.city} onChange={changeInfo}/></label>
            <br />
            <label htmlFor="" className="text-lg">Adress: <input type="text" name="adress" className="rounded-md border border-stone-400 my-1" value={info.adress} onChange={changeInfo}/></label>
            <br />
            <b className="text-sm underline hover:text-blue-700 cursor-pointer" onClick={toggleEdit}>Listo</b>
            </form>
            </>}  
        </>
      )}
    </>
  );
};

export default Adress;
