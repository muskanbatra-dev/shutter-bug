import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [],
};

const wishlist = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    SET_WISLIST: (state, action) => {
      state.wishlist = action.payload;
    },
  },
});

export const { SET_WISLIST } = wishlist.actions;
export default wishlist.reducer;
