import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductDesc = () => {
    const params =  useParams();
    const navigate = useNavigate();
    console.log(params)

  return (
    <div className="w-[80%] mx-auto">
      <h1>Product full Description</h1>
      <p>
        Product full Details Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Praesentium dolore est qui quasi? Corporis assumenda beatae animi
        sunt labore aperiam et tempore soluta voluptas, tenetur commodi
        reprehenderit, deserunt neque. Deleniti.
      </p>
      <button 
      onClick={() => navigate(-1)}
      className="bg-red-400 text-white rounded px-4 py-2">
        go Back
      </button>
    </div>
  );
};

export default ProductDesc;
