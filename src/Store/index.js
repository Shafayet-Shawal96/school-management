import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./LoginSlice";
import UISliceReducer from "./UISlice";
import EventSliceReducer from "./EventsSlice";

export const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    UISlice: UISliceReducer,
    eventsSlice: EventSliceReducer,
  },
});
