import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authToken: null,
  user: { email: "", password: "" },
  isLoggedin: false,
};
const auth = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    SET_USER: (state, action) => {
      state.user = action.payload;
    },
    SET_LOGIN: (state, action) => {
      state.isLoggedin = action.payload;
    },
    SET_TOKEN: (state, action) => {
      state.authToken = action.payload;
    },
  },
});

export const { SET_USER, SET_LOGIN, SET_TOKEN } = auth.actions;
export default auth.reducer;
