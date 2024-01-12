import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  authError: null,
  authLoading: false,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginPending: (state, action) => {
      state.authLoading = true;
      state.currentUser = null;
      state.authError = null;
    },
    loginSuccess: (state, action) => {
      state.authLoading = false;
      state.currentUser = action.payload;
      state.authError = null;
    },
    loginFailure: (state, action) => {
      state.authLoading = false;
      state.currentUser = null;
      state.authError = action.payload;
    },
  },
});

export const { loginPending, loginSuccess, loginFailure } = userSlice.actions;
export default userSlice.reducer;
