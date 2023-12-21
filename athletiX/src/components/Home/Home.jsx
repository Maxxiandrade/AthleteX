import Navbar from "./Navbar/Navbar";
import Aside from "./Aside/Aside"
import Cards from "../Cards/Cards";
import { useDispatch } from "react-redux";
import items from "../Cards/items"
import { getItems } from "../../redux/actions/actions";
const Home = () => {
    const dispatch = useDispatch();
    dispatch(getItems(items))
  return (
    <>

    <Navbar/>
    <div className="flex">
   <Aside/>
   <Cards/>
    </div>
   
   </>
  )
}

export default Home