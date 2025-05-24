import React from "react";
import Nav from "./components/Nav";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <div className="h-screen w-full bg-gray-100 py-10 px-16">
      <h1 className="text-5xl font-thin mb-5">Routing Instance</h1>

      <Nav />
      <MainRoutes />
      
    </div>
  );
};

export default App;
