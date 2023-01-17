import { createSlice } from "@reduxjs/toolkit";
import DefaultUI from "../JSONData/DefaultUI.json";

const initialState = {
  UI: DefaultUI,
};

const UISlice = createSlice({
  name: "UISlice",
  initialState,
  reducers: {
    newUIState: (state, action) => {
      state.UI = action.payload;
    },
  },
});

export const { newUIState } = UISlice.actions;

export const updateUISate = () => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://education-hub-12ebb-default-rtdb.firebaseio.com/0.json",
        { method: "GET" }
      );

      if (!response.ok) {
        throw new Error("Receiving UI Data Failed");
      }

      const UIData = await response.json();
      const UIList = [];
      UIList.push(UIData);
      dispatch(newUIState(UIList));
    };

    try {
      await sendRequest();
    } catch (error) {
      console.log(error);
    }
  };
};

export default UISlice.reducer;
