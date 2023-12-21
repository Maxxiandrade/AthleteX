import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Detail from "./components/Home/Detail/Detail";
import Pay from "./components/Pay/Pay";

export default function App() {
  return (
    <>
    <Routes>
    <Route path="*" element={<Home/>}></Route>
    <Route path='/article/:id' element={<Detail/>}/>
    <Route path='/pucharse/:id' element={<Pay/>}/>
    </Routes>
    </>
  )
}