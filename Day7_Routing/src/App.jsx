import React from "react";
import Products from "./components/Products";
import About from "./components/About";
import Services from "./components/Services";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";

const App = () => {
  return (
    <div className="h-screen w-full bg-gray-100" >

        <Nav/>

     <Routes className="flex justify-center gap-8 text-2xl p-4  ">
        <Route path="/"         element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/about"    element={<About/>}/>

     </Routes>

    </div>
  );
};

export default App;
