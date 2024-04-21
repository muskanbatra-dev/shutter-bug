import React from "react";
import "./Navigation.css";
import { HiShoppingCart } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import logo1 from "../../images/logo1.png";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FaShop } from "react-icons/fa6";
const Navigation = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo1} alt="logo" width={30} height={30} />
        <NavLink to="/">
        <p>ShutterBug</p>
        </NavLink>
        
      </div>

      <div className="header__search">
        <input type="search" />
        <FaSearch size={24} color="black" />
      </div>

      <div className="header__nav">
        <NavLink to="/login">
          <button className="header_btn">Login</button>
        </NavLink>
        <NavLink to="/wishlist">
          <p>
            <FaRegHeart size={24} color="white" />
          </p>
        </NavLink>
        <NavLink to="/productList">
          <p>
            <FaShop size={24} color="white" />
          </p>
        </NavLink>
        <NavLink to="/cart">
          <p>
            <HiShoppingCart size={24} color="white" />
          </p>
        </NavLink>
      </div>
    </header>
  );
};

export default Navigation;
