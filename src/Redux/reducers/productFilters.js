import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  priceSort: "",
  category: [],
  rating: 0,
  search: "",
};

export const productFilters = createSlice({
  name: "filters",
  initialState,
  reducers: {
    PRICE_SORT: () => {},
    ADD_CATEGORY: () => {},
    REMOVE_CATEGORY: () => {},
    SORT: () => {},
    RATING: () => {},
    CLEAR: () => {},
  },
});
