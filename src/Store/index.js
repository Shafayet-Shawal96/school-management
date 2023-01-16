import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./LoginSlice";
import loginPageReducer from "./LoginPageSlice";
import NoticeDetailsReducer from "./NoticeDetailsPageSlice";

export const store = configureStore({
  reducer: {
    loginStatus: loginReducer,
    noticeDetails: NoticeDetailsReducer,
  },
});
