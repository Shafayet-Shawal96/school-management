import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  //   user: {},
  //   error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginFn: (state, action) => {
      //   const { email, password } = action.payload;
      //   if (email === state.user.email && password === state.user.password) {
      //     state.isAuth = true;
      //   } else {
      //     state.error = "Invalid Credentials";
      //   }
      state.isAuth = true;
    },
    logoutFn: (state) => {
      //   state.isAuth = false;
      //   state.user = {};
      state.isAuth = false;
    },
  },
});

export const { signup, loginFn, logoutFn } = authSlice.actions;
export default authSlice.reducer;
