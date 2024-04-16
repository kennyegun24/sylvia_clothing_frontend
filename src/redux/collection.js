import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllCategories = createAsyncThunk(
  "category/category",
  async () => {
    const res = await fetch(
      "https://bk-fabrics-server.vercel.app//api/categories/all"
    );
    const data = await res.json();
    return data;
  }
);

export const getCategory = createAsyncThunk(
  "category/category/1",
  async (collection_name) => {
    const res = await fetch(
      `http://localhost:4000/api/categories/all?category=${collection_name}`
    );
    const data = await res.json();
    return data;
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState: {
    categories: [],
    collection: [],
    oneCategory: [],
    status: false,
  },
  reducers: {},
  extraReducers: (reduce) => {
    reduce
      .addCase(getAllCategories.fulfilled, (state, action) => {
        const isFulfilled = state;
        isFulfilled.status = "Fulfilled";
        isFulfilled.categories = action.payload;
        console.log(action.payload);
      })
      .addCase(getCategory.fulfilled, (state, action) => {
        const isFulfilled = state;
        isFulfilled.status = "Fulfilled";
        const dataJson = action.payload;
        isFulfilled.collection = dataJson;
      });
  },
});

export default categorySlice.reducer;
