import React, { useContext } from "react";
import { DataContext } from "../context/UserContext";

const Header = () => {
  const data = useContext(DataContext);
  return (
    <div className="bg-red-100 font-bold p-5">
      <h1>i am from Header <br /> {data.username} = Sameer is show from UserContext</h1>
    </div>
  );
};

export default Header;
