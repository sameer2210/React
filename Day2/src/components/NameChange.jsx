import React, { useState } from "react";

const NameChange = () => {
  const [name, setName] = useState("Sameer");
  const nameChangeHandler = () => {
    setName("MCA");
  };

  return (
    <>
      <h1>{name}</h1>
      <button onClick={nameChangeHandler}>Change name</button>
    </>
  );
};

export default NameChange;
