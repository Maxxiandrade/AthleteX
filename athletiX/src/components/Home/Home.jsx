import Navbar from "./Navbar/Navbar";
import Aside from "./Aside/Aside"
import Cards from "../Cards/Cards";
import { useDispatch } from "react-redux";
import items from "../Cards/items"
import { getItems } from "../../redux/actions/actions";
import Footer from "./Footer/Footer";
import { Link } from "react-router-dom";
const Home = () => {
    const dispatch = useDispatch();
    dispatch(getItems(items))
  return (
    <>

   <Link to='/admin'>
   <button>Admin</button>
   </Link>
    <Navbar/>
    <div className="flex h-screen">
   <Aside />
   <Cards/>
    </div>
   <Footer/>
   </>
  )
}

export default Home