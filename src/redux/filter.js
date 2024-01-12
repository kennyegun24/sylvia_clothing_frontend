import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "search",
  initialState: {
    advFilter: "a-z",
    minVal: 0,
    maxVal: 0,
  },
  reducers: {
    searchInp: (state, action) => {
      state.search = action.payload;
    },
    getMinVal: (state, action) => {
      state.minVal = action.payload;
    },
    getMaxVal: (state, action) => {
      state.maxVal = action.payload;
    },
    advFilter: (state, action) => {
      state.advFilter = action.payload;
    },
  },
});

export const { searchInp, getMinVal, getMaxVal, advFilter } =
  filterSlice.actions;
export default filterSlice.reducer;
