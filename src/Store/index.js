import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./LoginSlice";
import NoticeDetailsReducer from "./NoticeDetailsPageSlice";

export const store = configureStore({
  reducer: {
    loginStatus: loginReducer,
    noticeDetails: NoticeDetailsReducer,
  },
});
