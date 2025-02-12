import { IMG_URL } from "../utils/constants";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={IMG_URL}
          alt="logo img"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </header>
  );
};

export default Header