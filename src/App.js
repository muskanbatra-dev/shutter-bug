import React from "react";
import Mockman from "mockman-js";
import { Route, Routes } from "react-router-dom";
import ProductList from "./pages/ProductList/ProductList";
import Wishlist from "./pages/WishList/WishList";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
};

export default App;
