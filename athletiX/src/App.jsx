import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Detail from "./components/Home/Detail/Detail";
import Cart from "./components/Cart/Cart";
import Contact from "./components/Contact/Contact";
import Acount from "./components/Acount/Acount";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import Pay from "./components/Cart/Pay";

export default function App() {
  return (
    <>
    <Routes>
    <Route path="*" element={<Home/>}></Route>
    <Route path='/article/:id' element={<Detail/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/contactus' element={<Contact/>}/>
    <Route path='/account' element={<Acount/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/pay' element={<Pay/>}/>
    </Routes>
    </>
  )
}