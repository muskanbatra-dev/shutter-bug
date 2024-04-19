import React from 'react'
import Navigation from '../../components/Navigation/Navigation'
import Footer from '../../components/Footer/Footer'
import ProductCard from '../../components/Card/ProductCard/ProductCard'
import compact from "../../images/files/compact/3.png";
import "./Products.css"
const Products = () => {
  return (
    <div>
      <Navigation/>
      <aside>
        <ul>
          <li>bkjb</li>
        </ul>
      </aside>
      <ProductCard src={compact} productName={"compact"} price={90} rating={90}/>
      <Footer/>
    </div>
  )
}

export default Products