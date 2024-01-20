import React, { useEffect } from "react";
import { useState } from "react";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import menu from "../../../assets/menu.svg";
import carrito from "../../../assets/carrito.svg";
import { Link } from "react-router-dom";
import admin from "../../../assets/admin.svg";
import profile from "../../../assets/profile.svg";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase-config";
import { useDispatch, useSelector } from "react-redux";
import { clearState } from "../../../redux/actions/actions";
const Dropdown = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  let [toggleAdmin, setToggleAdmin] = useState(false);

  const uid = auth.currentUser?.uid;
  const localStorageUID = localStorage.getItem("uid");
  const user = useSelector((state) => state.userInfo);
  const isAdmin = user.isAdmin;
  console.log(user);
  useEffect(() => {
    if (!localStorageUID) {
      signOut(auth);
    }
    if (localStorageUID) {
      setIsLogged(true);
    }
    if(isAdmin){
      setToggleAdmin(true)
    }
  }, [uid]);

  const logout = () => {
    localStorage.setItem("uid", "");
    setIsLogged(false);
    signOut(auth);
    setToggleAdmin(false);
    dispatch(clearState());
  };
  return (
    <div className=" flex flex-col items-center rounded-lg px-1 absolute right-1">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className=" p-4 w- flex items-center justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent  active:scale-125 duration-200"
      >
        <img src={menu} alt="menu" className="h-8" />
        {!isOpen ? (
          <AiOutlineCaretDown className="h-8" />
        ) : (
          <AiOutlineCaretUp className="h-8" />
        )}
      </button>
      {isOpen && (
        <div className="bg-violet-50 absolute top-16 flex flex-col items-center rounded-lg p-2 w-full border border-gray-500 ">
          {isLogged && (
            <>
              <Link to={`/profile/${localStorageUID}`}>
                <img
                  src={profile}
                  alt="carrito"
                  className="h-6 cursor-pointer hover:scale-110 duration-100 items-center mt-4"
                />
              </Link>
              <hr
                className="my-4 border-gray-600"
                style={{ width: "80%", margin: "20px auto" }}
              />{" "}
            </>
          )}

          <Link to="/cart">
            <img
              src={carrito}
              alt="carrito"
              className={`h-8 cursor-pointer hover:scale-110 duration-100 items-center ${uid}`}
            />
          </Link>
          <hr
            className="my-4 border-gray-600"
            style={{ width: "80%", margin: "20px auto" }}
          />
          {!isLogged ? (
            <Link to="/login">
              <p className="cursor-pointer  hover:scale-110 duration-100 font-medium">
                Log in
              </p>
            </Link>
          ) : (
            <p
              className="cursor-pointer  hover:scale-110 duration-100 font-medium hover:text-red-700"
              onClick={logout}
            >
              Log out
            </p>
          )}
          <hr
            className="my-4 border-gray-600"
            style={{ width: "80%", margin: "20px auto" }}
          />
          <Link to="/contactus">
            <p className="cursor-pointer  hover:scale-110 duration-100 font-medium juce py-1 ">
              Contact
            </p>
          </Link>
          {toggleAdmin && isLogged ? (
            <>
              <hr
                className="my-4 border-gray-600"
                style={{ width: "80%", margin: "20px auto" }}
              />
              <Link to="/admin">
                <img
                  src={admin}
                  alt="admin"
                  className="h-8 hover:scale-110 duration-100 font-medium juce py-1"
                />
              </Link>
            </>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
