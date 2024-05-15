import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  price: 50,
  category: [],
  rating: 0,
  search: "",
  sort: null,
};

const productFilters = createSlice({
  name: "productfilters",
  initialState,
  reducers: {
    PRICE_FILTER: (state, action) => {
      state.price = action.payload;
    },

    ADD_CATEGORY: (state, action) => {
      state.category.push(action.payload);
    },
    REMOVE_CATEGORY: (state, action) => {
      const valueToRemove = action.payload;
      const index = state.category.indexOf(valueToRemove);
      state.category.splice(index, 1);
    },
    SEARCH: (state, action) => {
      state.search = action.payload.toLowerCase();
    },
    RATING: (state, action) => {
      state.rating = action.payload;
    },
    SORT_FILTER: (state, action) => {
      state.sort = action.payload;
    },
    CLEAR: (state) => {
      (state.price = 0),
        (state.category = []),
        (state.rating = 0),
        (state.search = ""),
        (state.sort = "");
    },
  },
});

export const {
  PRICE_FILTER,
  ADD_CATEGORY,
  REMOVE_CATEGORY,
  SEARCH,
  RATING,
  SORT_FILTER,
  CLEAR,
} = productFilters.actions;
export default productFilters.reducer;
