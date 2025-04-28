import React from "react";
import Cards from "./SubComponents/Cards";

const PropsEx = () => {
  const num = 10;

  return (
    <div>
      <Cards a={num} user="Sameer" age="69" city="Bhopal" />
    </div>
  );
};

export default PropsEx;
