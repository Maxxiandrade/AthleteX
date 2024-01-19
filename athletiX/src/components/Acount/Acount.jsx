import Navbar from "../Home/Navbar/Navbar";
import { Link } from "react-router-dom";
import Pucharses from "./Pucharses";
import Adress from "./Adress";

const Account = () => {
  return (
    <>
      <Navbar />
      <Pucharses />
      <Adress />
      <Link to="/contactus">
        <p className="underline">Tengo un problema</p>
      </Link>
    </>
  );
};

export default Account;
