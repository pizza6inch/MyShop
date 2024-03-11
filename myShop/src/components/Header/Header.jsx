import "./Header.css";
import Logo from "../../assets/pizza.png";
import Vector from "../../assets/Search.svg";
import Wishlist from "../../assets/Wishlist.svg";
import Cart from "../../assets/Cart.svg";
import User from "../../assets/user.svg";
import User2 from "../../assets/user2.svg";
import Mallbag from "../../assets/mallbag.svg";
import Logout from "../../assets/logout.svg";

import React, { useState } from "react";
function Header() {
  const [DropDownIsOpen, setDropDownIsOpen] = useState(false);
  return (
    <div className="Header">
      <div className="Header-Wrapper">
        <div className="Nav-Wrapper">
          <div className="Logo-Wrapper">
            <img className="Logo" src={Logo} alt="Pizza" />
            <div className="Text">Pizza</div>
          </div>
          <div className="Nav">
            <div className="Nav-Item">Home</div>
            <div className="Nav-Item">Products</div>
            <div className="Nav-Item">About</div>
            <div className="Nav-Item">Sign Up</div>
            <div className="Nav-Item">MyShop</div>
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
                <div className="DropDown-Item">
                  <img src={User2} alt="User2" />
                  <div className="Text">Profile</div>
                </div>
                <div className="DropDown-Item">
                  <img src={Mallbag} alt="mallbag" />
                  <div className="Text">My Order</div>
                </div>
                <div className="DropDown-Item">
                  <img src={Logout} alt="Logout" />
                  <div className="Text">Logout</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
