import React from "react";
import NameChange from "./components/NameChange";
import ObjectMap from "./components/ObjectMap";
import ObjectJson from "./components/ObjectJson";
import PropsEx from "./components/PropsEx";
import JsonEx from "./components/JsonEx";
import FormEx from "./components/FormEx";
import FormLive from "./components/FormLive";

const App = () => {
  return (
    <div>
      {/* <NameChange /> */}
      {/* <ObjectMap /> */}
      {/* <ObjectJson /> */}
      <FormEx />
      <FormLive />

      <br />
      <hr />
      {/* <PropsEx /> */}
      <hr />
      {/* <JsonEx /> */}
    </div>
  );
};

export default App;
