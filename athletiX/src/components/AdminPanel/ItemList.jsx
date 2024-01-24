import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Searchbar from "../Home/Aside/Searchbar";

const ItemList = () => {

  const itemList = useSelector((state) => state.items);


  return (
    <>
    <div className="flex justify-center ">
    <Searchbar/>
    </div>
    <div className="flex flex-wrap">
      {itemList.map((item) => (
        <div key={item.id} className="flex flex-col items-center m-2">
            <Link to={`/article/${item.id}`}>
          <img
            src={item.foto}
            alt=""
            className="h-16 rounded-full py-1 my-1 hover:scale-125 transition duration-100"
            />
            </Link>
          <p className="mt-2">{item.nombre}</p>
        </div>
      ))}
    </div>
  </>
  );
};

export default ItemList;
