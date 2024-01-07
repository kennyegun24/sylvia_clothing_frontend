import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// all products
export const getAllProducts = createAsyncThunk(
  "products/all/products",
  async () => {
    const res = await fetch(`http://localhost:4000/api/product/all`);
    const data = await res.json();
    return data;
  }
);

// one product
export const getOneProduct = createAsyncThunk("products/1", async (id) => {
  const res = await fetch(`http://localhost:4000/api/product/${id}`);
  const data = await res.json();
  return data;
});

// new products
export const getNewProducts = createAsyncThunk("products/new", async () => {
  const res = await fetch(`http://localhost:4000/api/product/all?new=${true}`);
  const data = await res.json();
  return data;
});

// top rated products
export const getTopRatedProducts = createAsyncThunk(
  "products/top_rated",
  async () => {
    const res = await fetch(
      `http://localhost:4000/api/product/all?top_rated=${true}`
    );
    const data = await res.json();
    return data;
  }
);

// best selling products
export const getBestSellingProducts = createAsyncThunk(
  "products/best_selling",
  async () => {
    const res = await fetch(
      `http://localhost:4000/api/product/all?most_sold=${true}`
    );
    const data = await res.json();
    return data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: [],
    product: {},
    newProducts: [],
    topRatedProducts: [],
    bestSellingProducts: [],
    oneCategory: [],
    status: false,
  },
  reducers: {},
  extraReducers: (reduce) => {
    reduce
      .addCase(getAllProducts.fulfilled, (state, action) => {
        const isFulfilled = state;
        isFulfilled.status = "Fulfilled";
        isFulfilled.allProducts = action.payload;
        console.log(action.payload);
      })
      .addCase(getOneProduct.fulfilled, (state, action) => {
        const isFulfilled = state;
        isFulfilled.status = "Fulfilled";
        const dataJson = action.payload;
        isFulfilled.product = dataJson;
      })
      .addCase(getNewProducts.fulfilled, (state, action) => {
        const isFulfilled = state;
        isFulfilled.status = "Fulfilled";
        const dataJson = action.payload;
        isFulfilled.newProducts = dataJson;
      })
      .addCase(getTopRatedProducts.fulfilled, (state, action) => {
        const isFulfilled = state;
        isFulfilled.status = "Fulfilled";
        const dataJson = action.payload;
        isFulfilled.topRatedProducts = dataJson;
      })
      .addCase(getBestSellingProducts.fulfilled, (state, action) => {
        const isFulfilled = state;
        isFulfilled.status = "Fulfilled";
        const dataJson = action.payload;
        isFulfilled.bestSellingProducts = dataJson;
        console.log(action.payload);
      });
  },
});

export default productsSlice.reducer;
