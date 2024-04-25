import React, { useEffect } from "react";
import Mockman from "mockman-js";
import { Route, Routes } from "react-router-dom";
import ProductList from "./pages/ProductList/ProductList";
import Product from "./pages/Product/Product";
import Wishlist from "./pages/WishList/WishList";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import Login from "./pages/Authentication/Login";
import SignUp from "./pages/Authentication/SignUp";
import { useDispatch } from "react-redux";
import { SET_PRODUCT } from "./Redux/reducers/product";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const serverCall = await fetch("/api/products");
        const products = await serverCall.json();
        console.log(products, "product");
        dispatch(SET_PRODUCT(products.products));
      } catch (err) {
        console.log(err);
      }
    })();
  },);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
};

export default App;
