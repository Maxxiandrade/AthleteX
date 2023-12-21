import Navbar from "./Navbar/Navbar";
import Aside from "./Aside/Aside"
import Cards from "../Cards/Cards";


const Home = () => {
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