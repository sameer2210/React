import React from "react";
import Header from "./Header";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Product from "../pages/Product";

const ReactRouterDom = () => {
  return (
    <div>
      <Header />
      <h2>sam</h2>
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
