/* eslint-disable react-refresh/only-export-components */
import React, { createContext } from "react";

export const DataContext = createContext();

const UserContext = ({children}) => {
  const userdata = {
    username : "Sameer",
    age : 34,
    city : "bhopal"
  }
  return (
    <div className="">
      <DataContext.Provider value={userdata}>
        {children}
      </DataContext.Provider>
    </div>
  );
};

export default UserContext;
