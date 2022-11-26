import { configureStore } from "@reduxjs/toolkit";
import typeReducer from "./slices/typeSlice";
export const store = configureStore({
  reducer: {
    type: typeReducer,
  },
});
