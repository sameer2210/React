import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // data: [
  // {
  //   id: 1,
  //   title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  //   price: 109.95,
  //   description:
  //     "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  //   category: "men's clothing",
  //   image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  //   rating: {
  //     rate: 3.9,
  //     count: 120
  //   }
  // }
  // ]// for sync

  data: [] //for async
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    create: (state, action) => {
      // state.data.push(product);
      // state ->  current initialState
      // action -> {type, payload(data)}
      // console.log(action);
      console.log("CREATE CALLED", action.payload);
      state.data.push(action.payload);
    },
    load: (state, action) => {
      console.log("LOAD CALLED", action.payload);
      state.data = action.payload;
    }
  }
});

export default productSlice.reducer; //data (send)
export const { create, load } = productSlice.actions; // functionality to update state
