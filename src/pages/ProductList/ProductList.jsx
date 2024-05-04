import React, { useEffect, useState } from "react";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import ProductListCard from "../../components/Card/ProductListCard/ProductListCard";

import { NavLink } from "react-router-dom";
import "./ProductList.css";
import { useSelector } from "react-redux";
const Products = () => {
  const product = useSelector((state) => state.product);
  const [prodData, setProdData] = useState([]);
  useEffect(() => {
    console.log(product.product, "pdpdpd");
    setProdData(product.product);
  });
  return (
    <div className="product__page">
      <Navigation />
      <div className="product__main">
        <aside className="">
          <div className="aside__filters">
            <p>filters</p>
            <p>clear</p>
          </div>
          <div className="all__filters">
            <div className="price__filter">
              <p className="price__filter__heading">price</p>

              <div className="range__values">
                <p>78787</p>
                <p>89898798</p>
              </div>

              <input type="range" className="range" />
            </div>

            <div className="categories__filter">
              <p>categories</p>

              <div className="checkbox">
                <label htmlFor="">
                  <input type="checkbox" />
                  compact
                </label>
                <label htmlFor="">
                  <input type="checkbox" />
                  DSLR
                </label>
                <label htmlFor="">
                  <input type="checkbox" />
                  film camera
                </label>
                <label htmlFor="">
                  <input type="checkbox" />
                  Mirrorless
                </label>
                <label htmlFor="">
                  <input type="checkbox" />
                  Proffesional
                </label>
              </div>
            </div>
            <div className="ratings__filter">
              <p>ratings</p>

              <div className="ratings">
                <label htmlFor="">
                  <div>
                    <span className="rating-star">★★★★★</span>
                  </div>
                  <input type="radio" />
                </label>
                <label htmlFor="">
                  <div>
                    <span className="rating-star">★★★★</span>
                  </div>
                  <input type="radio" />
                </label>
                <label htmlFor="">
                  <div>
                    <span className="rating-star">★★★</span>
                  </div>
                  <input type="radio" />
                </label>
                <label htmlFor="">
                  <div>
                    <span className="rating-star">★★</span>
                  </div>
                  <input type="radio" />
                </label>
                <label htmlFor="">
                  <div>
                    <span className="rating-star">★</span>
                  </div>
                  <input type="radio" />
                </label>
              </div>
            </div>

            <div className="sortby__filter">
              <p>SortBy</p>

              <div className="ratings">
                <label htmlFor="">
                  <input type="radio" />
                  High to Low
                </label>
                <label htmlFor="">
                  <input type="radio" />
                  Low to high
                </label>
              </div>
            </div>
          </div>
        </aside>

        <div className="product__cards">
          {
            prodData.map((item)=>{
              return(
                <NavLink to="/product">
            <ProductListCard
              src={item?.img}
              productName={item?.name}
              price={item?.price}
              
            />
          </NavLink>
              )
             
            })
          }
          {/* <NavLink to="/product">
            <ProductListCard
              src={compact}
              productName={"CANON EOS 90D DSLR CAMERA (BODY ONLY)"}
              price={106995}
              rating={"EMI starts at "}
            />
          </NavLink>
          <NavLink to="/product">
            <ProductListCard
              src={compact}
              productName={"CANON EOS 90D DSLR CAMERA (BODY ONLY)"}
              price={106995}
              rating={"EMI starts at "}
            />
          </NavLink>
          <NavLink to="/product">
            <ProductListCard
              src={compact}
              productName={"CANON EOS 90D DSLR CAMERA (BODY ONLY)"}
              price={106995}
              rating={"EMI starts at "}
            />
          </NavLink>
          <NavLink to="/product">
            <ProductListCard
              src={compact}
              productName={"CANON EOS 90D DSLR CAMERA (BODY ONLY)"}
              price={106995}
              rating={"EMI starts at "}
            />
          </NavLink>
          <NavLink to="/product">
            <ProductListCard
              src={compact}
              productName={"CANON EOS 90D DSLR CAMERA (BODY ONLY)"}
              price={106995}
              rating={"EMI starts at "}
            />
          </NavLink>
          <NavLink to="/product">
            <ProductListCard
              src={compact}
              productName={"CANON EOS 90D DSLR CAMERA (BODY ONLY)"}
              price={106995}
              rating={"EMI starts at "}
            />
          </NavLink> */}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;
