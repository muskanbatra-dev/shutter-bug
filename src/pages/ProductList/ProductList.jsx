import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import ProductListCard from "../../components/Card/ProductListCard/ProductListCard";
import compact from "../../images/files/compact/3.png";
import { NavLink } from "react-router-dom";
import "./ProductList.css";

const Products = () => {
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
              <p>price</p>

              <div className="range__values">
                <p>78787</p>
                <p>89898798</p>
              </div>

              <input type="range" />
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
          </NavLink>
          <NavLink to="/product">
            <ProductListCard
              src={compact}
              productName={"CANON EOS 90D DSLR CAMERA (BODY ONLY)"}
              price={106995}
              rating={"EMI starts at "}
            />
          </NavLink>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;
