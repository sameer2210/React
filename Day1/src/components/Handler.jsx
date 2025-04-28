/* eslint-disable no-unused-vars */
import React from "react";

const Handler = () => {
  const clickhandler = (msg) => {
    alert("Button clicked! " + msg);
  };

  return (
    <div>
      <h1>i am from Handler</h1>
      <br />
      <button onClick={() => clickhandler("hello")}> get alert </button>
    </div>
  );
};

export default Handler;
