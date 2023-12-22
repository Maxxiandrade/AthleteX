import carrito from '../../assets/carrito.svg'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/actions';

const Card = ({ id, nombre, precio, foto }) => {
  const dispatch = useDispatch()

  const handleAddToCart = (id)=>{
    dispatch(addToCart(id))
  }
    return (
        <>
        <div className="px-5 py-4  hover:scale-110 duration-200 items-center">
        <Link to={`/article/${id}`}>
            <p className='font-semibold'>{nombre}</p>
            <img className="size-48 rounded-full shadow-2xl object-cover" src={foto?.[0]}></img>
            <h3 className='font-semibold'>{`$${precio}`}</h3>
        </Link>
            <button className='hover:scale-110' onClick={() => handleAddToCart(id)}>
            <img src={carrito} alt="carrito" className='h-8' />
            </button>
        </div>
          </>
  );
};

export default Card