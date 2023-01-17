import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./LoginSlice";
import UISliceReducer from "./UISlice";

export const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    UISlice: UISliceReducer,
  },
});
