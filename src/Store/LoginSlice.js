import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginFn: (state) => {
      state.isAuthenticated = true;
    },
    logoutFn: (state) => {
      state.isAuthenticated = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginFn, logoutFn } = loginSlice.actions;

export default loginSlice.reducer;
