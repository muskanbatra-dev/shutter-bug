import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import ProductCard from "../../components/Card/ProductCard/ProductCard";
import compact from "../../images/files/compact/3.png";
import "./Products.css";
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
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            </div>
            
          </div>
          <div className="ratings__filter">
            <p>ratings</p>

            <div className="ratings">
            <input type="radio"/>
            <input type="radio"/>
            <input type="radio"/>
            <input type="radio"/>
            <input type="radio"/>
            </div>
            
          </div>

          <div className="sortby__filter">
            <p>SortBy</p>

            <div className="ratings">
            <input type="radio"/>
            <input type="radio"/>
            
            </div>
            
          </div>
        </aside>

        <div className="product__cards">
          <ProductCard
            src={compact}
            productName={"CANON EOS 90D DSLR CAMERA (BODY ONLY)"}
            price={106995}
            rating={"EMI starts at "}
          />
           <ProductCard
            src={compact}
            productName={"CANON EOS 90D DSLR CAMERA (BODY ONLY)"}
            price={106995}
            rating={"EMI starts at "}
          />
           <ProductCard
            src={compact}
            productName={"CANON EOS 90D DSLR CAMERA (BODY ONLY)"}
            price={106995}
            rating={"EMI starts at "}
          />
          <ProductCard
            src={compact}
            productName={"CANON EOS 90D DSLR CAMERA (BODY ONLY)"}
            price={106995}
            rating={"EMI starts at "}
          />
           <ProductCard
            src={compact}
            productName={"CANON EOS 90D DSLR CAMERA (BODY ONLY)"}
            price={106995}
            rating={"EMI starts at "}
          />
           <ProductCard
            src={compact}
            productName={"CANON EOS 90D DSLR CAMERA (BODY ONLY)"}
            price={106995}
            rating={"EMI starts at "}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;
