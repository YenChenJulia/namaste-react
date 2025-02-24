import { IMG_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnContext, setBtnContext] = useState("login");
  const onlineStatus = useOnlineStatus();
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
          <li>Cart</li>
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
        </ul>
      </div>
    </header>
  );
};

export default Header;
