import React, { useState } from "react";

function Products() {
  var [a, b] = useState(69);
  return (
    <div className=" h-36 w-56 bg-zinc-900 text-white p-5 flex flex-col items-center justify-around">
      <h1>{a}</h1>
      <button
        onClick={() => {
          b(a + 1);
        }}
        className="py-8 px-6 bg-amber-300 text-black rounded-xl "
      >
        click
      </button>
    </div>
  );
}

export default Products;
