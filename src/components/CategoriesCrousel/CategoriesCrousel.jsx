import React from "react";
import "./CategoriesCrousel.css"

const CategoriesCrousel = ({ src , text}) => {
  return (
    <div className="categories__card">
      <div className="categories__img">
        <img src={src} alt=""/>
        <p className="categories__text">{text}</p>
      </div>
    </div>
  );
};

export default CategoriesCrousel;
