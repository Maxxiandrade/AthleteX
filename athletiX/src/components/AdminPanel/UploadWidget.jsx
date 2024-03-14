import { useEffect, useRef } from "react"

const UploadWidget = () => {
    const cloudinaryRef = useRef()
    const widgetRef = useRef()
    useEffect(()=>{
        cloudinaryRef.current = window.cloudinary
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: 'dgunrvv9t',
            uploadPreset: 'mdmvgdrr'
        }, function(error, result){
            console.log(result);
        })
    },[])
    return(
        <button onClick={()=> widgetRef.current.open()} className=" border solid 1px black">
            Subir foto
        </button>
    )
}

export default UploadWidget