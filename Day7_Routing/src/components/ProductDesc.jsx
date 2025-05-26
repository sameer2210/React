import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductDesc = () => {
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);

  return (
    <div className="w-[80%] mx-auto flex flex-col gap-2 ">
      <h1 className="text-5xl">
        {params.name ? params.name.toLocaleUpperCase() : "No Product Name"}
      </h1>
      <h1>Product full Description</h1>
      <p>
        Product Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Praesentium dolore est qui quasi? Corporis assumenda beatae animi sunt
        labore aperiam et tempore soluta voluptas, tenetur commodi
        reprehenderit, deserunt neque. Deleniti.
      </p>
      <button
        onClick={() => navigate(-1)}
        className="bg-red-400 text-white w-1/7 rounded px-4 py-2"
      >
        go Back
      </button>
    </div>
  );
};

export default ProductDesc;
