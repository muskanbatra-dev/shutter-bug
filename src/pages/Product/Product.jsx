import React from "react";
import compact from "../../images/files/compact/3.png";
import ProductPageCard from "../../components/Card/ProductPajeCard/ProductPageCard";
const Product = () => {
  return (
    <div>
      <ProductPageCard
            src={compact}
            productName={"CANON EOS 90D DSLR CAMERA (BODY ONLY)"}
            price={106995}
            rating={"EMI starts at "}
          />
    </div>
  )
}

export default Product