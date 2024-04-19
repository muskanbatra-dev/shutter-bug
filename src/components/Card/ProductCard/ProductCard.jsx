import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./ProductCard.css"
const ProductCard = ({src, productName, rating, price}) => {
  return (
    <div className="product-card">
        <div className="product-card__imgdiv">
      <img className="product-card__img" src={src} alt=""/>
      <NavLink to="/login">
          <FaRegHeart size={20} color="white" />
        </NavLink>
        </div>
      <div className="product-card__details">
      <p className="product-card__name" >{productName}</p>
      <p className="product-card__rating" >{rating}</p>
      <p className="product-card__price" >{price}</p>
      </div>
      <div>
   

        <NavLink to="/login">
          <button className="header_btn">Add to cart</button>
        </NavLink>
      </div>

    </div>
  );
};

export default ProductCard;
