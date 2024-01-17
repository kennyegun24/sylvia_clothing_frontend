import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartSlice from "./cart";
import categorySlice from "./collection";
import productsSlice from "./products";
import filterSlice from "./filter";
import userSlice from "./user";
import orderSlice from "./order";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, userSlice);
const persistedCartReducer = persistReducer(persistConfig, cartSlice);
const persistedOrder = persistReducer(persistConfig, orderSlice);

export const store = configureStore({
  reducer: {
    user: persistedReducer,
    cart: persistedCartReducer,
    collections: categorySlice,
    products: productsSlice,
    filter: filterSlice,
    order: persistedOrder,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
