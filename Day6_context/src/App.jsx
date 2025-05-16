import React from "react";
import { useContext } from "react";
import { UserContext } from "./context/Wrapper";

const App = () => {
  const data = useContext(UserContext);
  console.log(data);
  return <div>App</div>;
};

export default App;
