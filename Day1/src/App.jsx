// rfce
import React from "react";
import Products from "./Products";
import Obj from "./Obj";
import Bulb from "./Bulb";

function App() {
  return (
    <div className="w-screen h-screen bg-gray-300 text-red-400 text-5xl flex flex-col justify-around items-center ">
      <h1>sam</h1>
      <form className=" border-2 border-black ">
        <input id="name" name="username" placeholder="username"></input>
      </form>

      <Products />
      <Obj age="33" data={{ age: 69, name: "sameer" }} />
      <Bulb />

    </div>
  );
}

export default App;
