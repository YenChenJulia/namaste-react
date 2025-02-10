import React from "react";
import { createRoot } from "react-dom/client";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg?w=360"
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

const RestaurantCard = (props) => {
	const {resName, cuisine} = props
  return (
    <div
      className="res-card"
      style={{
        background: "#f0f0f0",
      }}
    >
			<img className="res-logo" alt="res-logo" src="https://img.freepik.com/free-photo/chicken-skewers-with-onions-top-salad_1220-567.jpg?semt=ais_hybrid"></img>
      <h3>{resName}</h3>
			<h4>{cuisine}</h4>
			<h4>4.4 stars</h4>
			<h4>38 minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
        <RestaurantCard resName="Magana Food" cuisine="North Indian Food"/>
        <RestaurantCard resName="KFC" cuisine="Burger, fast food"/>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<AppLayout />);
