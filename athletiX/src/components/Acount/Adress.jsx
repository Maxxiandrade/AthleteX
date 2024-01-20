import { useState } from "react";
import { useSelector } from "react-redux";

const Adress = () => {
  const userInfo = useSelector((state) => state.userInfo);
  localStorage.setItem('info', userInfo)
  const { entrega } = userInfo;
  const [editInfo, setEditInfo] = useState(false)
  const [info, setInfo] = useState({
    state:entrega?.Provincia,
    city:entrega?.Ciudad,
    adress:entrega?.Direccion
  })

   const toggleEdit = ()=>{
    setEditInfo(!editInfo)
  }

  const changeInfo = ({target})=>{
    const {name, value} = target
    setInfo({
      ...info,
      [name]: value
    })
  }
  return (
    <>
      {entrega ? (
        <>
          <h2 className="text-3xl mx-1">Datos de entrega:</h2>
          {entrega && (
            <>
            {!editInfo ? <div className="mx-2">
             <p className="text-lg my-2">State: {info.state}</p>
              <p className="text-lg  my-2">City: {info.city}</p>
              <p className="text-lg  my-2">Adress: {info.adress}</p>
              <b className="text-sm underline hover:text-blue-700 cursor-pointer" onClick={toggleEdit}>Edit info</b>
            </div> : 
            <>
           <form action="" className="ml-1" onSubmit={changeInfo}>
            <label htmlFor="" className="text-lg">State: <input type="text" name="state" className="rounded-md border border-stone-400 my-1" value={info.state} onChange={changeInfo}/></label>
            <br />
            <label htmlFor="" className="text-lg">City: <input type="text" name="city" className="rounded-md border border-stone-400 my-1" value={info.city} onChange={changeInfo}/></label>
            <br />
            <label htmlFor="" className="text-lg">Adress: <input type="text" name="adress" className="rounded-md border border-stone-400 my-1" value={info.adress} onChange={changeInfo}/></label>
            <br />
            <b className="text-sm underline hover:text-blue-700 cursor-pointer" onClick={toggleEdit}>Finish</b>
            </form>
            </>}  
            </>
          )}
        </>
      ) : (
        <h1 className="underline cursor-pointer">
          Configura tus datos para los envíos
        </h1>
      )}
    </>
  );
};

export default Adress;
