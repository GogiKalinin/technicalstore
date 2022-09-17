import React from "react";
import Inform from "../Inform/Inform";
import Navbar from "../Navbar/Navbar";
import "./Header.sass";
const Header = () => {
  return (
    <div className="Header">
      <Inform />
      <Navbar />
    </div>
  );
};
export default Header;
