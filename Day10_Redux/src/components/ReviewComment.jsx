/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReview } from "../actions/reviewAction";
import { addReview, deleteReview } from "../reducers/reviewSlice";

const ReviewComment = () => {
  const dispatch = useDispatch();
  const { reviews, loading, error } = useSelector((state) => state.reviews);

  const handleReview = () => {
    const newReview = {
      id: Date.now(),
      body: "Sample review from Sameer"
    };
    dispatch(addReview(newReview));
  };

  useEffect(() => {
    dispatch(fetchReview());
  }, [dispatch]);

  console.log(reviews);

  return (
    <div className="h-full w-full bg-gray-100 p-6">
      <h1 className="px-2 py-1 bg-gray-800 text-white rounded-xl font-semibold">
        Review of users as Comments{" "}
      </h1>
      <button
        className="mt-4 px-4 py-2  bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={handleReview}
      >
        Add User
      </button>

      {/* --------------------------------------------------------------------------------------------------- */}

      <li
        key={reviews.id}
        className="p-2 bg-white shadow rounded mb-2 flex justify-between items-center"
      >
        <span>{reviews.body}</span>
        <button
          onClick={() => dispatch(deleteReview(reviews.id))}
          className="text-red-500 hover:text-red-700 text-sm"
        >
          Delete
        </button>
      </li>

      {/*------------------------------------------------------------------------------------------- */}

      {/* Show reviews if available */}
      <ul className="mt-4">
        {reviews.length === 0 ? (
          <li>No reviews yet.</li>
        ) : (
          reviews.map((review) => (
            <li key={review.id} className="p-2 bg-white shadow rounded mb-2">
              {review.body}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default ReviewComment;
