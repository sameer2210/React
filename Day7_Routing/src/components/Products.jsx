import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Products = () => {
  const Navigate = useNavigate();
  const navigatHandler = () => {
    Navigate("/products/detail");
  };
  return (
    <div>
      <div className="w-[80%] mx-auto">
        <h1>Products Name</h1>

        <button
          onClick={() => {
            navigatHandler;
          }}
          className="bg-red-400 text-white rounded px-4 py-2"
        >
          Products Details
        </button>

        <hr />
        <hr />
        <Outlet />
      </div>
    </div>
  );
};

export default Products;
