/* eslint-disable react-refresh/only-export-components */
import React, { createContext } from "react";

export const DataContext = createContext();

const UserContext = ({children}) => {
  const userdata = {
    username : "sameer",
    age : 34,
    city : "bhopal"
  }
  return (
    <div>
      <DataContext.Provider value={userdata}>
        {children}
      </DataContext.Provider>
    </div>
  );
};

export default UserContext;
