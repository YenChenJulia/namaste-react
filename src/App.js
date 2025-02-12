import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import { createRoot } from "react-dom/client";

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
