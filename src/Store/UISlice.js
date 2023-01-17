import { createSlice } from "@reduxjs/toolkit";
import UI from "../JSONData/UI.json";
import newUI from "../JSONData/NewUI.json";

const initialState = {
  UI: UI,
};

const UISlice = createSlice({
  name: "UISlice",
  initialState,
  reducers: {
    setUIState: (state) => {
      state.UI = newUI;
    },
  },
});

export const { setUIState } = UISlice.actions;

export default UISlice.reducer;
