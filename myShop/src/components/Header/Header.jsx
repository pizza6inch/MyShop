import "./Header.css";
import logo from "../../assets/pizza.png";
import Vector from "../../assets/Search.svg";
import Wishlist from "../../assets/Wishlist.svg";
import Cart from "../../assets/Cart.svg";
import User from "../../assets/user.svg";

import React, { useState } from "react";
function Header() {
  const [DropDownIsOpen, setDropDownIsOpen] = useState(false);
  return (
    <div className="Header">
      <div className="Header-Wrapper">
        <div className="Nav-Wrapper">
          <div className="Logo-Wrapper">
            <img className="Logo" src={logo} alt="Pizza" />
            <div className="Text">Pizza</div>
          </div>
          <div className="Nav">
            <div className="Nav-Item">Home</div>
            <div className="Nav-Item">Products</div>
            <div className="Nav-Item">About</div>
            <div className="Nav-Item">Sign Up</div>
            <div className="Nav-Item">MyStore</div>
          </div>
        </div>
        <div className="Icon-Wrapper">
          <div className="SearchBar">
            <input type="text" placeholder="What are you looking for?" />
            <img src={Vector} alt="Search" />
          </div>
          <div className="Icons">
            <img src={Wishlist} alt="Wishlist" />
            <img src={Cart} alt="Cart" />
            <img
              src={User}
              alt="User"
              onClick={() => setDropDownIsOpen(!DropDownIsOpen)}
            />
            {DropDownIsOpen && (
              <div className="DropDown">
                <div className="DropDown-Item">Profile</div>
                <div className="DropDown-Item">My Order</div>
                <div className="DropDown-Item">Logout</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
