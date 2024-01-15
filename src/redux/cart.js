import { createSlice } from "@reduxjs/toolkit";
// import { toast } from "react-toastify";
import { toast } from "sonner";

const initialState = {
  products: [],
  total: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    itemAdded: (state, action) => {
      const findItem = state.products.find(
        (prod) => prod.id === action.payload.id
      );
      if (findItem) {
        toast.error("Item already in the cart", {
          description: "Unsuccessful",
          duration: 2000,
          position: "top-right",
          style: {
            background: "#fb6f6f",
            color: "#fff",
          },
        });
        return;
      }

      state.products.push(action.payload);
      state.total += action.payload.price;
      toast.success("Item added to cart", {
        description: "Successfully added",
        duration: 2000,
        position: "top-right",
        style: {
          background: "#31f731",
        },
      });
    },
    deleteCart: (state, action) => {
      const productId = action.payload.id;
      const updatedProducts = state.products.filter(
        (product) => product.id !== productId
      );
      state.products = updatedProducts;
      state.total -= action.payload.price;
      toast.success("Item removed from cart", {
        description: "Item deleted",
        duration: 2000,
        position: "top-right",
      });
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
    clearCart: () => initialState,
  },
});

export const {
  itemAdded,
  deleteCart,
  addQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
