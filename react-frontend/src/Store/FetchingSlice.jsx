import { createSlice } from "@reduxjs/toolkit";

const FetchingSlice = createSlice({
  name: "fetchingStatus",
  initialState: {
    fetchingDone: false,
    currentlyFetching: false,
  },
  reducers: {
    markfetchingDone: (state) => {
      state.fetchingDone = true;
    },
    markfetchingStarted: (state) => {
      state.currentlyFetching = true;
    },
    markfetchingFinished: (state) => {
      state.currentlyFetching = false;
    },
  },
});

export const FetchingSliceActions = FetchingSlice.actions;
export default FetchingSlice;
