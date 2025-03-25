import { IMG_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnContext, setBtnContext] = useState("login");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(userContext);
  const cartItem = useSelector((store) => store.cart.items);

  return (
    <header className="header flex justify-between items-center bg-amber-100">
      <div className="logo-container">
        <img className="logo w-35" src={IMG_URL} alt="logo img"></img>
      </div>
      <div className="nav-items">
        <ul className="flex gap-2 p-2">
          <li className="text-amber-500">
            {onlineStatus === true ? "online" : "offline"}
          </li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About us</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact us</Link>
          </li>
          <li>
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li className="font-bold">Cart - {cartItem.length} items</li>
          <button
            className="login"
            onClick={() => {
              btnContext === "login"
                ? setBtnContext("logout")
                : setBtnContext("login");
            }}
          >
            {btnContext}
          </button>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
