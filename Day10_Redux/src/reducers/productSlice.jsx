import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: []
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    create: (state, action) => {
      // state.data.push(product);
      // state ->  current initialState
      // action -> {type, payload(data)}
      console.log(action);
      state.data.push(action.payload);
    }
  }
});

export default productSlice.reducer; //data (send)
export const { create } = productSlice.actions; // functionality to update state
