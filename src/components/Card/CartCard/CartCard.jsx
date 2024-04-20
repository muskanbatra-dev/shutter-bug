import React from "react";
import { NavLink } from "react-router-dom";
import "./CartCard.css";
const CartCard = ({ src, productName, rating, price }) => {
  return (
    <div className="cart-card">
     
        <img className="cart-card__img" src={src} alt="" />
     
      <div className="cart-card__details">
        <p className="cart-card__name">{productName}</p>
        <p className="cart-card__price">{price}</p>
        <p className="cart-card__rating">{rating}</p>
        <NavLink to="/login">
          <button className="removecart_btn">Remove From Cart</button>
        </NavLink>
        <NavLink to="/login">
          <button className="movewishlist_btn">Move to Wishlist</button>
        </NavLink>
      </div>
      <div></div>
    </div>
  );
};

export default CartCard;
