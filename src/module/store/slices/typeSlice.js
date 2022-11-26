import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const typeSlice = createSlice({
  name: "type",
  initialState,
  reducers: {
    changePageType: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changePageType } = typeSlice.actions;

export default typeSlice.reducer;
