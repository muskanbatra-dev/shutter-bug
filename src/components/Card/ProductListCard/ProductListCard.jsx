import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./ProductListCard.css"
const ProductListCard = ({src, productName, rating, price}) => {
  return (
    <div className="product-card">
        <div className="product-card__imgdiv">
      <img className="product-card__img" src={src} alt=""/>
      <div className="wishlist-btn">
      <NavLink to="/login">
          <FaRegHeart size={20} color="white" />
        </NavLink>
      </div>
      
        </div>
      <div className="product-card__details">
      <p className="product-card__name" >{productName}</p>
      <p className="product-card__price" >{price}</p>
    
      
      </div>
      <div>
   

        <NavLink to="/login">
          <button className="addcart_btn">Add to cart</button>
        </NavLink>
      </div>

    </div>
  );
};

export default ProductListCard;
