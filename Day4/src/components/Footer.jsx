import React, { useContext } from "react";
import { DataContext } from "../context/UserContext";

const Footer = () => {

  const data = useContext(DataContext)

  return (
    <div>
      <h1>i am Footer</h1>
      <h2>Age is {data.age}</h2>
    </div>
  );
};

export default Footer;
