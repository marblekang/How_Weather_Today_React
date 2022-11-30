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

// 여기서 actions 를 export 해 줘서 다른 컴포넌트에서 import 했을떄
// 그냥 리듀서 이름만 가지고 사용할 수 있는것.
export const { changePageType } = typeSlice.actions;

export default typeSlice.reducer;
