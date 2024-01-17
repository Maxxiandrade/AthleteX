import { useState } from "react"
import {v4 as uuid} from 'uuid'

const AddItem = () => {
    const [showAdd, setShowAdd] = useState(true)
    const [item, setItem] = useState({
        id: uuid(),
        nombre:'',
        marca:'',
        precio:null,
        deporte:'',
        descripcion:'',
        foto:''
    })

    const handleInputChange = ({target})=>{
        const {name, value} = target
        setItem({
            ...item,
            [name]: value
        })
    }

    const handleClick = (e)=>{
        e.preventDefault()
        console.log(item);
    }
   
   return (
    <>
        <button onClick={()=>setShowAdd((value)=>!value)}>
            Añadir item
        </button>
    
    {!showAdd &&(
    <form action="">
    <label htmlFor="">Nombre:
    <input 
     type="text"
     placeholder="Nombre del item"
     name="nombre"
     onChange={handleInputChange}
     />
    </label>
    <br />
    <label htmlFor="">Marca:
    <input 
     type="text"
     placeholder="Marca del item"
     name="marca"
     onChange={handleInputChange} />
    </label>
    <br />
    <label htmlFor="">Precio: $
    <input 
     type="text"
     placeholder="Precio del item"
     name="precio"
     onChange={handleInputChange}/>
    </label>
    <br />
    <label htmlFor="">Deporte: 
    <input 
     type="text"
     placeholder="Deporte del item"
     name="deporte"
     onChange={handleInputChange}/>
    </label>
    <br />
    <label htmlFor="">Descripcion: 
    <input 
     type="text"
     placeholder="Descripcion del item"
     name="descripcion"
     onChange={handleInputChange}
     />
    </label>
    <br />
    <label htmlFor="">Foto: 
    <input 
     type="text"
     placeholder="Foto del item"
     name="foto"
     onChange={handleInputChange} />
    </label>
    <br />
    <button onClick={handleClick}>Añadir</button>
    </form>)}
     </>
  ) 
  
}

export default AddItem