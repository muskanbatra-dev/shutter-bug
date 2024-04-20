import React from "react";
import { NavLink } from "react-router-dom";
import "./CartCheckout.css";
const CartCheckout = ({  productName, rating, price }) => {
  return (
    <div className="checkout-card">
         
      <div className="checkout-card__details">
        <p className="checkout-card__name">{productName}</p>
        <p className="checkout-card__price">{price}</p>
        <p className="checkout-card__rating">{rating}</p>
       
        <NavLink to="/login">
          <button className="movewishlist_btn">Proceed to pay</button>
        </NavLink>
      </div>
      <div></div>
    </div>
  );
};

export default CartCheckout;