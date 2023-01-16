import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./LoginSlice";
import loginPageReducer from "./LoginPageSlice";

export const store = configureStore({
  reducer: { auth: authSliceReducer, loginPage: loginPageReducer },
});
