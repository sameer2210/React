import React from "react";
import Sum from "./components/Sum";
import Sub from "./components/Sub";
import NameChange from "./components/NameChange";
import ObjectMap from "./components/ObjectMap";
import ObjectJson from "./components/ObjectJson";

const App = () => {
  const clickhandler = (msg) => {
    alert("Button clicked! " + msg);
  };
  return (
    <div>
      {/* <NameChange /> */}
      {/* <Sum /> */}
      {/* <Sub /> */}
      <ObjectMap />
      <ObjectJson />

      <button onClick={() => clickhandler("hello")}> get alert </button>
    </div>
  );
};

export default App;
