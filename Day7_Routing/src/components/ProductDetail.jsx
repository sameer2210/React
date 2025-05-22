import React from "react";
import { useNavigate } from "react-router-dom";
import ProductDetail from "./ProductDetail";

const ProductDetail = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[80%] mx-auto">
      <h1>Product full Details</h1>
      <h1>Product full Details</h1>
      <button
        onClick={() => navigate(-1)}
        className="bg-red-400 text-white rounded px-4 py-2"
      >
        go Back
      </button>
    </div>
  );
};

export default ProductDetail;
