/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Register from "./components/Register";

const App = () => {
  const [text, settext] = useState("hello");

  // usestate, useEffect two way binding

  const click = () => {
    settext("Hello world");
  };

  return (
    <>
      <div>
        {text}
        <hr></hr>
        <button onClick={click}>click</button>
        <Register />
      </div>
    </>
  );
};

export default App;
