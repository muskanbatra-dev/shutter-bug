import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    SET_CART: (state, action) => {
      state.cartItems = action.payload;
    },
  },
});

export const { SET_CART } = cart.actions;
export default cart.reducer;
