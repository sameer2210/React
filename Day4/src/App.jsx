
import React, { useContext } from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import { DataContext } from "./context/UserContext";

const App = () => {
  const data = useContext(DataContext);
  console.log(data);

  return (
    <>
      <h1 className=" bg-gray-200 text-2xl font-bold p-5 ">This is App <br/> name =  {data.username} , age = {data.age} , city = {data.city}</h1>
      <hr/>
      <Header />
      <hr/>
      <Section />
      <hr/>
      <Footer />
    </>
  );
};

export default App;


// context = data is export directly to any file of a project
// app is wrap around Usercontext so make children of UserContext and pass in App.jsx