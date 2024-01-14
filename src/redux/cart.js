import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    total: 0,
  },
  reducers: {
    itemAdded: (state, action) => {
      const findItem = state.products.find(
        (prod) => prod.id === action.payload.id
      );
      if (findItem) return;

      state.products.push(action.payload);
      state.total += action.payload.price;
    },
    deleteCart: (state, action) => {
      const productId = action.payload.id;
      const updatedProducts = state.products.filter(
        (product) => product.id !== productId
      );
      state.products = updatedProducts;
      state.total -= action.payload.price;
    },
    addQuantity: (state, action) => {
      const updatedProduct = action.payload;
      console.log(updatedProduct);
      let existingProduct = state.products.find(
        (product) => product.id === updatedProduct
      );

      if (existingProduct) {
        state.total -= existingProduct.price;
        existingProduct.quantity += 1;
        existingProduct.price =
          existingProduct.price + existingProduct.product.price;
        state.total += existingProduct.quantity * existingProduct.product.price;
      }
    },
    decreaseQuantity: (state, action) => {
      const updatedProduct = action.payload;
      console.log(updatedProduct);
      let existingProduct = state.products.find(
        (product) => product.id === updatedProduct
      );

      if (existingProduct) {
        state.total -= existingProduct.price;
        existingProduct.quantity -= 1;
        existingProduct.price =
          existingProduct.price - existingProduct.product.price;
        state.total += existingProduct.quantity * existingProduct.product.price;
      }
    },
  },
});

export const {
  itemAdded,
  loadCart,
  deleteCart,
  addQuantity,
  decreaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
