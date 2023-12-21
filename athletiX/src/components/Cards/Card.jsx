import carrito from '../../assets/carrito.svg'
import { Link } from 'react-router-dom';

const Card = ({ id, nombre, precio, foto }) => {
    return (
        <>
        <Link to={`/article/${id}`}>
        <div className="px-5 py-5  hover:scale-110 items-center">
            <p className='font-semibold'>{nombre}</p>
            <img className="size-48 rounded-full shadow-2xl" src={foto}></img>
            <Link to={`/pucharse/${id}`}>
            <button className='hover:scale-110'>
            <img src={carrito} alt="carrito" className='h-8'/>
            </button>
            </Link>
            <h3 className='font-semibold'>{precio}</h3>
        </div>
        </Link>
          </>
  );
};

export default Card