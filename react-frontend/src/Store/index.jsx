import { configureStore } from "@reduxjs/toolkit";
import ItemSlice from "./ItemSlice";
import FetchingSlice from "./FetchingSlice";
import BagSlice from "./BagSlice";
const MyntraStore = configureStore({
  reducer: {
    items: ItemSlice.reducer,
    fetchingStatus: FetchingSlice.reducer,
    bag: BagSlice.reducer,
  },
});
export default MyntraStore;
