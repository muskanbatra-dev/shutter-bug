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

    // ADD_TO_CART: (state, action) => {
    //     const id = state.cartItems.find(({})=>)
    //   state.cartItems.push(action.payload);
    // },

    // REMOVE_FROM_CART: (state, action) => {
    //   state.cartItems.slice(action.payload);
    // },

    // UPDATE_CART: () => {},
  },
});

export const { SET_CART } = cart.actions;
export default cart.reducer;
