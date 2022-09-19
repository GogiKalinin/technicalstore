import React from "react";
import Inform from "../Inform/Inform";
import Navbar from "../Navbar/Navbar";
import "./Header.sass";
const Header = ({ showBasketModal, setShowBasketModal }) => {
  console.log("showBasketModal", showBasketModal);
  console.log("setShowBasketModal", setShowBasketModal);
  return (
    <div className="Header">
      <Inform />
      <Navbar
        setShowBasketModal={setShowBasketModal}
        showBasketModal={showBasketModal}
      />
    </div>
  );
};
export default Header;
