import { useState } from "react"
import {v4 as uuid} from 'uuid'
import { addItem } from "../../redux/actions/actions"
import { useDispatch } from "react-redux"
import {Cloudinary} from "@cloudinary/url-gen";
import axios from 'axios'
import Swal from 'sweetalert2'
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";

const AddItem = () => {
    const cld = new Cloudinary({cloud: {cloudName: 'dgunrvv9t'}});
    const dispatch = useDispatch()
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

    // const uploadImageCloudinary = async (file) => {
    //     const formData = new FormData();
  
    //     if(file===''){
    //       formData.append("file", 'https://as2.ftcdn.net/jpg/00/64/67/27/220_F_64672736_U5kpdGs9keUll8CRQ3p3YaEv2M6qkVY5.jpg');
    //     }else{
    //       formData.append("file", file);
    //     }
  
    //     formData.append("upload_preset", "vkblr6a8");
  
    //     try {
    //       const { data } = await axios.post("https://api.cloudinary.com/v1_1/engpartnercloudinary/image/upload", formData)
    //       return data?.url
    //     }
    //     catch (error) {
    //       throw Error(error)
    //     }
    //   }

    //   const handleChangeImage = async (event) => {
    //     setCreateUserInfo({
    //       ...createUserInfo,
    //       [event.target.name]: event.target.files[0],
    //     })
    //   }

    const handleInputChange = async({target})=>{
        // const photoURLCloudinary = await uploadImageCloudinary(item.foto);
        const {name, value} = target
        setItem({
            ...item,
            [name]: value
        })
    }

    const handleClick = (e)=>{
        e.preventDefault()
        dispatch(addItem(item))
        setItem({
        id: uuid(),
        nombre:'',
        marca:'',
        precio:'',
        deporte:'',
        descripcion:'',
        foto:''
        })
        Swal.fire({
            title: 'Done!',
            text: 'Item added successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
    }
   
   return (
    <>
        <button
      onClick={() => setShowAdd((value) => !value)}
      className="bg-stone-300 border border-stone-400 mt-1 px-5 py-5 rounded-md ml-5 text-black hover:scale-110 transition duration-100 flex items-center"
    >
      <span>Añadir item</span>
      {showAdd ? <HiChevronDown className="ml-2" /> : <HiChevronUp className="ml-2" />}
    </button>
    
    {!showAdd &&(
    <form className='ml-5 mt-2 bg-stone-300 border border-stone-400 backdrop-blur-lg rounded-xl w-96 p-6 flex flex-col justify-center items-center h-96' >
    <label htmlFor="">Nombre:
    <input 
     type="text"
     value={item.nombre}
     placeholder="Nombre del item"
     name="nombre"
     onChange={handleInputChange}
     className="rounded-md border border-stone-400 mx-2 text-center"
     />
    </label>
    <br />
    <label htmlFor="">Marca:
    <input 
     type="text"
     value={item.marca}
     placeholder="Marca del item"
     name="marca"
     onChange={handleInputChange} 
     className="rounded-md border border-stone-400 mx-2 text-center"/>
    </label>
    <br />
    <label htmlFor="">Precio: $
    <input 
     type="text"
     value={item.precio}
     placeholder="Precio del item"
     name="precio"
     onChange={handleInputChange}
     className="rounded-md border border-stone-400 mx-2 text-center"/>
    </label>
    <br />
    <label htmlFor="">Deporte: 
    <input 
     type="text"
     value={item.deporte}
     placeholder="Deporte del item"
     name="deporte"
     onChange={handleInputChange}
     className="rounded-md border border-stone-400 mx-2 text-center"/>
    </label>
    <br />
    <label htmlFor="">Descripcion: 
    <input 
     type="text"
     value={item.descripcion}
     placeholder="Descripcion del item"
     name="descripcion"
     onChange={handleInputChange}
     className="rounded-md border border-stone-400 mx-2 text-center"
     />
    </label>
    <br />
    <label htmlFor="" >Foto: 
    <input 
     type="text"
     placeholder="Foto del item"
     name="foto"
     value={item.foto}
     onChange={handleInputChange} 
     className="rounded-md border border-stone-400 mx-2 text-center"/>
    </label>
    <br />
    <button onClick={handleClick} className="border border-stone-400 rounded-md px-5 py-1 hover:scale-105">Añadir</button>
    </form>)}
     </>
  ) 
  
}

export default AddItem