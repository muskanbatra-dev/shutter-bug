import React from 'react'
import CartCard from '../../components/Card/CartCard/CartCard'
import compact from "../../images/files/compact/3.png";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import CartCheckout from '../../components/CartCheckout/CartCheckout';
const Cart = () => {
  return (
    <div>
      <Navigation />
        <CartCard
            src={compact}
            productName={"CANON EOS 90D DSLR CAMERA (BODY ONLY)"}
            price={106995}
            rating={"EMI starts at "}
          />
          <CartCheckout productName={"CANON EOS 90D DSLR CAMERA (BODY ONLY)"}
            price={106995}
            rating={"EMI starts at "}/>
              <Footer />
    </div>
  )
}

export default Cart