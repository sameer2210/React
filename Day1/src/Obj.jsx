import React from "react";

function Obj({ age, data, name }) {
  return (
    <div className=" h-56 w-96 text-2xl text-black border-2 ">
      <h1>i am from Obj</h1>
      <h1>age = {age}</h1>
      <h1>data-age = {data.age}</h1>
      <h1>data-name = {data.name}</h1>
    </div>
  );
}

export default Obj;
