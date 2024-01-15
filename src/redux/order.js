import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userOrderDetails: null,
};

const orderSlice = createSlice({
  initialState,
  name: "order",
  reducers: {
    addOrder: (state, action) => {
      state.userOrderDetails = action.payload;
    },
    resetOrder: () => initialState,
  },
});

export const { addOrder, resetOrder } = orderSlice.actions;
export default orderSlice.reducer;
