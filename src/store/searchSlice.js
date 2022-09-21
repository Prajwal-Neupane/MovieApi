import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    addSearch: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default searchSlice.reducer;
export const { addSearch } = searchSlice.actions;
