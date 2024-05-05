import React from "react";
import { useEffect } from "react";
import CartCard from "../../components/Card/CartCard/CartCard";
import compact from "../../images/files/compact/3.png";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import CartCheckout from "../../components/CartCheckout/CartCheckout";
import {  useSelector } from "react-redux";
import axios from "axios";


const Cart = () => {
  const auth = useSelector((state)=>state.auth)
  const token = auth.authToken



const getCart = async (encodedToken) =>
  await axios
    .get("/api/user/cart", {
      headers: { authorization: encodedToken },
    })
    .then((response) => {
      console.log(response.data.cart)
      console.log("abcsdcsds");
    })
    .catch((err) => {
      console.log(err);
    });
  useEffect(() => {
    console.log(auth,"TOKEN")
    getCart(token);
  });
  return (
    <div>
      <Navigation />
      <CartCard
        src={compact}
        productName={"CANON EOS 90D DSLR CAMERA (BODY ONLY)"}
        price={106995}
        rating={"EMI starts at "}
      />
      <CartCheckout
        productName={"CANON EOS 90D DSLR CAMERA (BODY ONLY)"}
        price={106995}
        rating={"EMI starts at "}
      />
      <Footer />
    </div>
  );
};

export default Cart;
