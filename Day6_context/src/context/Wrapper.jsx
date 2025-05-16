/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { createContext, useState } from "react";
export const UserContext = createContext(null);

const Wrapper = (props) => {
  const [users, setusers] = useState([{ id: "abcdefghijklmnopqrstuvwxyz", name: "sam", age: 12 }]);
  return (
    <UserContext.Provider value={[users, setusers]}>
      {props.children}
    </UserContext.Provider>
  );
};

export default Wrapper;
