import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allEvents: [],
};

const EventsSlice = createSlice({
  name: "eventsSlice",
  initialState,
  reducers: {
    setAllEvents: (state, action) => {
      state.allEvents = [...state.allEvents, ...action.payload];
    },
  },
});

export const updateEventState = (pageNo) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        `https://education-hub-12ebb-default-rtdb.firebaseio.com/allEvents/0/allEvents-page-${pageNo}.json`
      );

      console.log("Fetching pageNo", pageNo);

      if (!response.ok) {
        throw new Error("Receiving Events Data Failed");
      }

      const allEventsData = await response.json();
      dispatch(EventsSlice.actions.setAllEvents(allEventsData));
    };

    try {
      await sendRequest();
    } catch (error) {
      console.log(error);
    }
  };
};

export default EventsSlice.reducer;
