import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductsDetail = () => {
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);

  const NavigateHandler = () => {
    // navigate("/products");
    navigate(-1);
  };

  return (
    <div className="w-[80%] mx-auto flex flex-col gap-2">
      <h1 className="text-5xl">
        {params.name ? params.name.toLocaleUpperCase() : "No Product Name"}
      </h1>
      <h1>Product full Details</h1>
      <h1>Product full Details</h1>

      <button
        onClick={NavigateHandler}
        className="bg-red-400 text-white rounded px-4 py-2 w-1/7"
      >
        Go Back
      </button>
    </div>
  );
};

export default ProductsDetail;
