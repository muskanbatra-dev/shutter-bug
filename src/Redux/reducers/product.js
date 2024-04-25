import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
};

const product = createSlice({
  name: "product",
  initialState,
  reducers: {
    SET_PRODUCT: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const {  SET_PRODUCT } = product.actions;
export default product.reducer;
