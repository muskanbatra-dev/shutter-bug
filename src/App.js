import React from "react";
import Mockman from "mockman-js";
import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products/Products";
import Wishlist from "./pages/WishList/WishList";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import Login from "./pages/Authentication/Login";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
};

export default App;
