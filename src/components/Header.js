import { IMG_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [btnContext, setBtnContext] = useState("login");
  return (
    <header className="header">
      <div className="logo-container">
        <img className="logo" src={IMG_URL} alt="logo img"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>home</li>
          <li>About us</li>
          <li>Contact us</li>
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
