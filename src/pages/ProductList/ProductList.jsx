import React, { useEffect} from "react";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import ProductListCard from "../../components/Card/ProductListCard/ProductListCard";
import { NavLink } from "react-router-dom";
import "./ProductList.css";
import { useSelector , useDispatch} from "react-redux";
import {REMOVE_CATEGORY , ADD_CATEGORY, RATING , SORT_FILTER, PRICE_FILTER, CLEAR} from "../../Redux/reducers/productFilters";

const ProductList = () => {
  const dispatch = useDispatch()
  const product = useSelector((state) => state.product);
  const productFilters = useSelector((state)=> state.productFilters)
  // const [prodData, setProdData] = useState([]);
  useEffect(() => {
    console.log(product.product, "pdpdpd");
    // setProdData(product.product);
  }, [product.product]);

  const minMaxPrices = product.product.reduce((acc, productFilters) => {
    // Initialize min and max prices if they're not set yet
    if (acc.min === undefined || productFilters.price < acc.min) {
      acc.min = productFilters.price;
    }
    if (acc.max === undefined || productFilters.price > acc.max) {
      acc.max = productFilters.price;
    }
    return acc;
  }, {});

  let prodDb = product.product.filter(
    (item)=> (productFilters.category.length === 0 ||productFilters.category.includes(item.category)) && 
    ((item.price >= productFilters.price))&&
    (item.rating >= productFilters.rating) && (productFilters.search.length === 0 || item.name.toLowerCase().includes(productFilters.search))
  )
  .sort((a,b)=>
  productFilters.sort === "LTH" ? 
  a.price - b.price
  : productFilters.sort === "HTL"
  ? b.price - a.price
  :0
  )
const categoryList = product.product.reduce((acc,item)=>{
  if(!acc.includes(item.category)){
    acc.push(item.category);
  }
  return acc;
},[])
const handleCategoryClick = (category ) => {
  if (productFilters.category.includes(category)) {
      dispatch(REMOVE_CATEGORY(category))
  } else {
      dispatch(ADD_CATEGORY(category))

  }
}
  const handleRatingRange = (val)=>{
    dispatch(RATING(val))
  }
  const handlePriceRange = (val)=>{
    dispatch(PRICE_FILTER(val))
  }
const handlePriceSortClick = (val)=>{
  dispatch(SORT_FILTER(val))
}

const handleClearFilters = (val) =>{
 dispatch(CLEAR())
}
  return (
    <div className="product__page">
      <Navigation />
      <div className="product__main">
        <aside className="">
          <div className="aside__filters">
            <p>filters</p>
            <NavLink  onClick={()=>{
              handleClearFilters()
            }}>
            <p>clear</p>
                </NavLink>
           
            
          </div>
          <div className="all__filters">
            <div className="price__filter">
              <p className="price__filter__heading">price</p>

              <div className="range__values">
                <p>{minMaxPrices.min}</p>
                <p>{minMaxPrices.max}</p>
              </div>

              <input type="range" 
              min={minMaxPrices.min}
              max={minMaxPrices.max} 
              value={productFilters.price}
              onChange={(e)=>{handlePriceRange(e.target.value)}}
              className="range" />
            </div>

            <div className="categories__filter">
              <p>categories</p>

              <div className="checkbox">
              {categoryList.map((itemCat) => {
            return (
              <li key={itemCat} className="checkbox__list">
                <input
                  type="checkbox"
                  name={`${itemCat} checkbox`}
                  id={itemCat}
                  checked={productFilters.category.includes(itemCat)}
                  onClick={() =>handleCategoryClick(itemCat)}
                />
                <label htmlFor={itemCat}>{itemCat}</label>
              </li>
            );
          })}
              </div>
            </div>
            <div className="ratings__filter">
              <p>ratings</p>

              <div className="ratings">
                <label htmlFor="">
                  <div>
                    <span className="rating-star">★★★★★ </span>
                  </div>
                  <input type="radio" value={5} onClick={(e)=>{handleRatingRange(e.target.value)}} checked={productFilters.rating ==='5'} />
                </label>
                <label htmlFor="">
                  <div>
                    <span className="rating-star">★★★★ </span>
                  </div>
                  <input type="radio" value={4} onClick={(e)=>{handleRatingRange(e.target.value)}} checked={productFilters.rating  ==='4'}/>
                </label>
                <label htmlFor="">
                  <div>
                    <span className="rating-star">★★★</span>
                  </div>
                  <input type="radio"  value={3} onClick={(e)=>{handleRatingRange(e.target.value)}}  checked={productFilters.rating  ==='3'}/>
                </label>
                <label htmlFor="">
                  <div>
                    <span className="rating-star">★★ </span>
                  </div>
                  <input type="radio" value={2} onClick={(e)=>{handleRatingRange(e.target.value)}} checked={productFilters.rating  ==='2'}/>
                </label>
                <label htmlFor="">
                  <div>
                    <span className="rating-star">★ </span>
                  </div>
                  <input type="radio" value={1}  onClick={(e)=>{handleRatingRange(e.target.value)}} checked={productFilters.rating ==='1'}/>
                </label>
              </div>
            </div>

            <div className="sortby__filter">
              <p>SortBy</p>

              <div className="ratings">
                <label htmlFor="LTH">
                  <input type="radio" checked={productFilters.sort === "LTH"} onClick={() =>handlePriceSortClick("LTH")}/>
                  Low to High
                </label>
                <label htmlFor="HTL">
                  <input type="radio" checked={productFilters.sort === "HTL"} onClick={() =>handlePriceSortClick("HTL")}/>
                  High to Low
                </label>
              </div>
            </div>
          </div>
        </aside>
        <div className="product__page">
          
          <div className="product__cards">
            {prodDb.map((item) => {
              return (
                <NavLink to="/product">
                  <ProductListCard
                    src={item?.img}
                    productName={item?.name}
                    price={item?.price}
                  />
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductList;
