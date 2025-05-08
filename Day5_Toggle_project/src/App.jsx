/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import SignIN from "./components/SignIn";
import SignUp from "./components/SignUp";
import Users from "./components/Users";

const App = () => {
  const [toggler, settoggler] = useState(true);
  const [users,setusers] = useState([]);
  // const [data, setdata] = useState([]);

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   const user = {
  //     name: e.target.name.value,
  //     email: e.target.email.value,
  //     password: e.target.password.value
  //   };
    // setdata((prev) => [...prev, user]);
    // console.log(data);
  // };

  return (
    <main className="h-screen w-screen flex justify-center space-x-30 items-start overflow-y-auto bg-gray-900 text-xl text-white p-10 ">
      <div className="w-3/4 ">
        {toggler ? (
          <SignUp
            // submitHandler={submitHandler}
            users={users}
            setusers={setusers}
            toggler={toggler}
            settoggler={settoggler}
          />
        ) : (
          <SignIN
            // submitHandler={submitHandler}
            toggler={toggler}
            settoggler={settoggler}
          />
        )}
      </div>
      {/* <Users data={data} /> */}
    </main>
  );
};

export default App;
