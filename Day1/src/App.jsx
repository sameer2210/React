/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import Sum from "./components/Sum";
import Sub from "./components/Sub";
import Handler from "./components/Handler";

const App = () => {
  const [textchange, settextchange] = useState("hello");

  const click = (event) => {
    event.preventDefault();               // Do not refresh page / or Reload the screen on calling function
    settextchange("Hello world");
  };

  return (
    <>
      <div>
        {textchange}
        <hr /> <br />
        <Handler />
        <Register />
        <Login />
        <br /> <br />
        <Sum />
        <Sub />
        <br /> <hr />
        <button onClick={click}>click me</button>
      </div>
    </>
  );
};

export default App;
