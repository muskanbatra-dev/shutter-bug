import React from "react";
import "./Navigation.css";
import logo1 from "../../images/logo1.png";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";

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
         <img alt="" src="https://res.cloudinary.com/dojt2ovwz/image/upload/v1716026721/tf9rvfch2qops9boyzfn.png"/>
          </p>
        </NavLink>
        <NavLink to="/productList">
          <p>
          <img alt="" src="https://res.cloudinary.com/dojt2ovwz/image/upload/v1716026619/ehfz8ezxwnhcvxw7huj8.png"/>
          </p>
        </NavLink>
        <NavLink to="/cart">
          <p>
          <img alt="" src="https://res.cloudinary.com/dojt2ovwz/image/upload/v1716025360/j14l4pytljivdccawjta.png"/>
          </p>
        </NavLink>
      </div>

      <div className="header__nav_mobile">
        <NavLink to="/login">
          <button className="header_btn">Login</button>
        </NavLink>
        <NavLink to="/wishlist">
          <p>
         Wishlist
          </p>
        </NavLink>
        <NavLink to="/productList">
          <p>
          Products
          </p>
        </NavLink>
        <NavLink to="/cart">
          <p>
          Cart
          </p>
        </NavLink>
      </div>
    </header>
  );
};

export default Navigation;
