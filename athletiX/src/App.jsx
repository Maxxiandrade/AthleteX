import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Detail from "./components/Home/Detail/Detail";
import Pay from "./components/Pay/Pay";
import Contact from "./components/Contact/Contact";
import Acount from "./components/Acount/Acount";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";

export default function App() {
  return (
    <>
    <Routes>
    <Route path="*" element={<Home/>}></Route>
    <Route path='/article/:id' element={<Detail/>}/>
    <Route path='/pucharse' element={<Pay/>}/>
    <Route path='/contactus' element={<Contact/>}/>
    <Route path='/account' element={<Acount/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    </Routes>
    </>
  )
}