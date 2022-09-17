import React from "react";
import "./Navbar.sass";
import { Logo } from "./Logo.jsx";
import { Basket } from "./Basket.jsx";
import { Search } from "./Search.jsx";
import "./Userpic.png";
const Navbar = () => {
  return (
    <div className="Navbar">
      <ul className="Navbar__menu">
        <li className="Navbar__item">
          <a href="google.com">
            <div className="Navbar__logo">
              <Logo />
            </div>
          </a>
        </li>
        <li className="Navbar__item">
          <a href="google.com">Laptops</a>
        </li>
        <li className="Navbar__item">
          <a href="google.com">Desktop PCs</a>
        </li>
        <li className="Navbar__item">
          <a href="google.com">Networking Devices</a>
        </li>
        <li className="Navbar__item">
          <a href="google.com">Printers & Scanners</a>
        </li>
        <li className="Navbar__item">
          <a href="google.com">PC Parts</a>
        </li>
        <li className="Navbar__item">
          <a href="google.com">All Other Products</a>
        </li>
        <li className="Navbar__item">
          <a href="google.com">Repairs</a>
        </li>
        <a href="google.com">
          <button className="Navbar__button">Our deals</button>
        </a>
      </ul>

      <ul className="UserMenuList">
        <li className="MenuListItem">
          <a href="google.com">
            <div className="UserMenuSearch">
              <Search />
            </div>
          </a>
        </li>
        <li className="MenuListItem">
          <a href="google.com">
            <div className="UserMenuSearch">
              <Basket />
            </div>
          </a>
        </li>
        <li className="MenuListItem">
          <a href="google.com">
            <img src={require("./Userpic.png")} alt="userpic"></img>
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
