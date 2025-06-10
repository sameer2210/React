import axios from "../utils/Axios";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [isAccept, setisAccept] = useState(false);
  const [products, setproducts] = useState(null);

  const GetProducts = async () => {
    try {
      const res = await axios.get("/products");
      // console.log(res);
      setproducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetProducts();
    console.log("Products.jsx | Mounted");

    return () => {
      console.log("Products.jsx | UnMounted");
      // alert("Do you want to Leave this page ?")
    };
  }, [isAccept]);                   //[] is dependency array which stop to rerender the components & [isAccept] when Run this code on mount and every time isAccept updates (or) rerender component

  // useEffect(() => {            //maximum time we use only this
  //   GetProducts();
  // },[]);

  // console.log(isAccept);

  return (
    <div className="flex flex-col justify-between items-center gap-3">
      <h1>Products</h1>
      {/* <button
        className="px-2 py-1 bg-gray-800 text-white rounded-xl font-semibold"
        onClick={GetProducts}
      >
        get product
      </button> */}

      <button
        className="px-2 py-1 bg-gray-800 text-white rounded-xl font-semibold"
        onClick={() => setisAccept(!isAccept)}
      >
        Change value
      </button>

      <h1>{isAccept ? "Hello" : "Bye tata"}</h1>

      <hr />

      <ol>
        {products
          ? products?.map((p) => <li key={p.id}>{p.title}</li>)
          : "Loading"}
      </ol>
    </div>
  );
};

export default Products;
