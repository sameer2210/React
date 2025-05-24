import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Products from "../components/Products";
import Services from "../components/Services";
import About from "../components/About";
import ProductsDetail from "./../components/ProductsDetail";
import ProductDesc from "../components/ProductDesc";

const MainRoutes = () => {
  return (
    <div>
      <Routes className="flex justify-center gap-8 text-2xl p-4  ">
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />}>
          <Route path="/products/detail" element={<ProductsDetail />} />
          <Route path="/products/detail/:name" element={<ProductDesc />} />
        </Route>
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  ); 
};

export default MainRoutes;
