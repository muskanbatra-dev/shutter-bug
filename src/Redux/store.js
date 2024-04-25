import { configureStore } from "@reduxjs/toolkit";
import auth from "./reducers/auth";
import cart from "./reducers/cart";
import product from "./reducers/product";

export const store = configureStore({
  reducer: {
    auth: auth,
    cart: cart,
    product: product,
  },
});
