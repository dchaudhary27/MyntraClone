import { createSlice } from "@reduxjs/toolkit";

const BagSlice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addToBag: (state, action) => {
      state.push(action.payload);
    },
    deleteFromBag: (state, action) => {
      return state.filter((itemId) => itemId !== action.payload);
    },
  },
});

export const bagSliceActions = BagSlice.actions;
export default BagSlice;
