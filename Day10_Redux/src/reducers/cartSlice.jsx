import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      id: 0,
      title: "string",
      price: 0.1,
      description: "string",
      category: "string",
      image: "http://example.com"
    }
  ]
};

const cartSlice = createSlice({
  name: "products",
  initialState
});

export default cartSlice.reducer;
