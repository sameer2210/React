import React from "react";
import Normal from "./components/Normal";
import UtilsAxios from "./components/UtilsAxios";

const App = () => {
  return (
    <div>
      {/* <Normal/>               // 1st method for one small or less api */}
      <UtilsAxios />              // 2nd method useing utils forlder for more api
    </div>
  );
};

export default App;
