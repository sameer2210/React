// Async action to fetch users from backend
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchReview = createAsyncThunk("user/fetchReview", async () => {
  const response = await axios.get("https://dummyjson.com/comments");
  //   return response.data;
  return response.data.comments; // optional: extract only comments array
});

//----------------------------------------------------------------------------------------
// fetch('https://dummyjson.com/comments')
// .then(res => res.json())
// .then(console.log);
