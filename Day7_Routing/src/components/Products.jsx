import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();

  const navigateHandler = (productId) => {
    navigate(`/products/detail/${productId}`);
  };

  const navigateToDescription = (productId) => {
    navigate(`/products/detail/${productId}`);
  };

  return (
    <div>
      <div className="w-[80%] mx-auto mt-4">
        <div className="flex justify-between items-center mb-3">
          <span className="mb-4 text-4xl font-thin">Product 1</span>
          <div>
            <button
              onClick={() => navigateHandler("product-1")} // Fixed: Actually call the function
              className="mr-16 bg-red-400 text-white rounded px-4 py-2"
            >
              Products Details
            </button>
            <button
              onClick={() => navigateToDescription("product-1")} // Fixed: Just pass product ID
              className="bg-red-400 text-white rounded px-4 py-2"
            >
              Description
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center mb-3">
          <span className="mb-4 text-4xl font-thin">Product 2</span>
          <div>
            <button
              onClick={() => navigateHandler("product-2")} // Fixed: Actually call the function
              className="mr-16 bg-red-400 text-white rounded px-4 py-2"
            >
              Products Details
            </button>
            <button
              onClick={() => navigateToDescription("product-2")} // Fixed: Just pass product ID
              className="bg-red-400 text-white rounded px-4 py-2"
            >
              Description
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center mb-3">
          <span className="mb-4 text-4xl font-thin">Product 3</span>
          <div>
            <button
              onClick={() => navigateHandler("product-3")} // Fixed: Actually call the function
              className="mr-16 bg-red-400 text-white rounded px-4 py-2"
            >
              Products Details
            </button>
            <button
              onClick={() => navigateToDescription("product-3")} // Fixed: Just pass product ID
              className="bg-red-400 text-white rounded px-4 py-2"
            >
              Description
            </button>
          </div>
        </div>

        <hr />
        <hr />
        <Outlet />
      </div>
    </div>
  );
};

export default Products;
