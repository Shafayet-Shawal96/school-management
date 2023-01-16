import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./LoginSlice";

export const store = configureStore({
  reducer: { auth: authSliceReducer },
});
