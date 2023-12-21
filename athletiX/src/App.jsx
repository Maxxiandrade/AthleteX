import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
    <Routes>
    <Route path="*" element={<Home/>}></Route>
    
    </Routes>
    </>
  )
}