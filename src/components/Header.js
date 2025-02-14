import { IMG_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnContext, setBtnContext] = useState("login");
  return (
    <header className="header">
      <div className="logo-container">
        <img className="logo" src={IMG_URL} alt="logo img"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/about"}>About us</Link></li>
          <li><Link to={"/contact"}>Contact us</Link></li>
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
