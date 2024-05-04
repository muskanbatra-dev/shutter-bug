import React from "react";
import compact from "../../images/files/compact/3.png";
import ProductPageCard from "../../components/Card/ProductPajeCard/ProductPageCard";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";

const Product = () => {

  return (
    <div>
      <Navigation/>

      <ProductPageCard
            src={compact}
            productName={"CANON EOS 90D DSLR CAMERA (BODY ONLY)"}
            price={106995}
            rating={"EMI starts at "}
          />
          <Footer/>
    </div>
  )
}

export default Product