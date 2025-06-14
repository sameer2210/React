import { createSlice } from "@reduxjs/toolkit";
import { fetchReview } from "../actions/reviewAction";

const reviewSlice = createSlice({
  name: "review",
  initialState: {
    reviews: [],
    loading: false,
    error: null
  },

  // ✅ Synchronous reducers here
  reducers: {
    addReview: (state, action) => {
      state.reviews.push(action.payload);
    },
    deleteReview: (state, action) => {
      state.reviews = state.reviews.filter((r) => r.id !== action.payload);
    }
  },

  // ✅ Asynchronous logic handled here
  extraReducers: (builder) => {
    builder
      .addCase(fetchReview.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchReview.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.loading = false;
      })
      .addCase(fetchReview.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const { addReview, deleteReview } = reviewSlice.actions; // ✅ export sync actions

export default reviewSlice.reducer;
