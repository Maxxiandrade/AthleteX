import Navbar from "./Navbar/Navbar";
import Aside from "./Aside/Aside"
import Cards from "../Cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import items from "../Cards/items"
import { getItems, getUserInfo } from "../../redux/actions/actions";
import Footer from "./Footer/Footer";
import { useEffect } from "react";
const Home = () => {
  const userInfo = useSelector((state) => {
    console.log(state); // Muestra el estado completo en la consola
    return state.user; // Ajusta esto para apuntar a la parte correcta del estado
  });;
    const dispatch = useDispatch();
    dispatch(getItems(items))
    const email = localStorage.getItem('email')
      if(email){
        dispatch(getUserInfo(email))
        console.log(email);
      }
 
  return (
    <>
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