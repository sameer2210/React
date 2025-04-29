import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="text-xl font-bold bg-gray-200 p-3">
      <h2> This is Header <input className="bg-white border-2 font-normal p-0.5" type="text" placeholder="write anything "/> change without Reload</h2>

      <div className="flex justify-evenly mt-3">
        <Link to="/about">About</Link>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/product">Product</Link>
      </div>
    </div>
  );
};

export default Header;

// 3:00:00
