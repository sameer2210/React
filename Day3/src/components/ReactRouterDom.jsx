import React from "react";
import Header from "./Header";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Product from "../pages/Product";
import { Route, Routes } from "react-router-dom";

const ReactRouterDom = () => {
  return (
    <div className="h-screen w-full bg-red-200 p-5">
      <h1  className="text-2xl font-bold">This is ReactRouterDom</h1>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  );
};

export default ReactRouterDom;

// npm i react-router-dom
// main.jsx = BrowserRouter import and wrap
