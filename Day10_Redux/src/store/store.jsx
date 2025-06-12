import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./../reducers/productSlice";
import cartSlice from "./../reducers/cartSlice";
import userSlice from "./../reducers/userSlice";

export const store = configureStore({
  reducer: {
    products: productSlice,
    carts: cartSlice,
    users: userSlice
  }
});
