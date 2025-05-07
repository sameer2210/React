/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import SignIN from "./components/SignIn";
import SignUp from "./components/SignUp";
import Users from "./components/Users";

const App = () => {
  const [toggler, settoggler] = useState(true);
  return (
    <main className="h-screen w-screen overflow-y-auto bg-gray-900 text-2xl text-white p-10 ">
      <div className="w-1/3">
        {toggler ? (
          <SignUp toggler={toggler} settoggler={settoggler} />
        ) : (
          <SignIN toggler={toggler} settoggler={settoggler} />
        )}
      </div>
      <Users />
    </main>
  );
};

export default App;
