import carrito from '../../assets/carrito.svg'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/actions';
import Swal from 'sweetalert2'

const Card = ({ id, nombre, precio, foto }) => {
  const dispatch = useDispatch()

  const handleAddToCart = async(id)=>{
    Swal.fire({
      title: `You will add <p class='text-violet-900'>${nombre}</p> to your cart.`,
      confirmButtonText: 'Sounds good!',
      confirmButtonColor:'#4c1d95',
      showDenyButton: true,
      denyButtonText:'Cancel',
      denyButtonColor:'#9c9495'
    }).then((result)=>{
      if(result.isConfirmed){
        dispatch(addToCart(id))
      }
    })

  }

  
    return (
        <>
        <div className="px-5 mt-4  hover:scale-90 duration-200 items-center my-3">
        <Link to={`/article/${id}`}>
            <p className='font-semibold'>{nombre}</p>
            <img className="size-48 rounded-full shadow-2xl object-cover border border-zinc-300" src={foto}></img>
            <h3 className='font-semibold'>{`$${precio}`}</h3>
        </Link>
            <button className='hover:scale-110' onClick={() => handleAddToCart(id)}>
            <img src={carrito} alt="carrito" className='h-8 ' />
            </button>
        </div>
          </>
  );
};

export default Card