import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";

const App = () => {
  return (
    <div className="h-screen w-full bg-gray-100 flex flex-col items-center p-8 gap-4">
      <h1 className="text-xl font-bold">React LifeCycle component</h1>

      <nav className="bg-red-50 p-3 gap-6 flex">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
};

export default App;
