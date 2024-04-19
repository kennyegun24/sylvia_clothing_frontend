import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllCategories = createAsyncThunk(
  "category/category",
  async () => {
    const res = await fetch(
      "https://bk-fabrics-server.vercel.app/api/categories/all"
    );
    const data = await res.json();
    return data;
  }
);

export const getCategory = createAsyncThunk(
  "category/category/1",
  async (collection_name) => {
    const res = await fetch(
      `https://bk-fabrics-server.vercel.app/api/categories/all?category=${collection_name}`
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
    finished: true,
  },
  reducers: {},
  extraReducers: (reduce) => {
    reduce
      .addCase(getAllCategories.fulfilled, (state, action) => {
        const isFulfilled = state;
        isFulfilled.finished = true;
        console.log("first");
        isFulfilled.categories = action.payload;
      })
      .addCase(getCategory.fulfilled, (state, action) => {
        const isFulfilled = state;
        isFulfilled.finished = true;
        const dataJson = action.payload;
        isFulfilled.collection = dataJson;
      })
      .addCase(getAllCategories.pending, (state) => {
        const isFulfilled = state;
        isFulfilled.finished = false;
      })
      .addCase(getCategory.pending, (state) => {
        const isFulfilled = state;
        isFulfilled.finished = false;
      });
  },
});

export default categorySlice.reducer;
