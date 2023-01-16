import { createSlice } from "@reduxjs/toolkit";

const breadcrumbObj = {
  title: "Login/ash",
  subtitle: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore .`,
  pageName: "login/Register",
  overlayClass: "breadcrumb-overly-4",
  breadcrumbImage: {
    backgroundImage: `url(./assets/img/bg/breadcrumb-bg-4.jpg)`,
  },
};

const initialState = {
  loginObject: [],
};

const loginPageSlice = createSlice({
  name: "loginPageInfoSet",
  initialState,
  reducers: {
    setLoginDeatils: (state) => {
      state.loginObject = [breadcrumbObj];
    },
  },
});
export const { setLoginDeatils } = loginPageSlice.actions;
export default loginPageSlice.reducer;
