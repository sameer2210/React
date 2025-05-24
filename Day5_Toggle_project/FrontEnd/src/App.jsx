import React, { useEffect, useState } from "react";
import SignIN from "./components/SignIn";
import SignUp from "./components/SignUp";
import Users from "./components/Users";
import axios from "axios";

const App = () => {
  const [toggler, settoggler] = useState(true);
  const [users, setusers] = useState([]);

  // const [data, setdata] = useState([]);

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   const user = {
  //     name: e.target.name.value,
  //     email: e.target.email.value,
  //     password: e.target.password.value
  //   };
  //   setdata((prev) => [...prev, user]);
  //   console.log(data);
  // };

  //  fetchUsers function
  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:3000/users");
      setusers(res.data);
      return res.data; // return data for logging/debug
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  useEffect(() => {
    fetchUsers(); //  initial load
  }, []);

  return (
    <main className="h-screen w-screen flex justify-center space-x-25 items-start overflow-hidden bg-stone-500 text-xl text-white px-6">
      <div className="w-2/4">
        {toggler ? (
          <SignUp
            // submitHandler={submitHandler}
            users={users}
            setusers={setusers}
            fetchUsers={fetchUsers} //  pass it
            toggler={toggler}
            settoggler={settoggler}
          />
        ) : (
          <SignIN
            // submitHandler={submitHandler}
            users={users}
            setusers={setusers}
            toggler={toggler}
            settoggler={settoggler}
          />
        )}
      </div>
      {/* <Users data={data} /> */}
      <Users users={users} fetchUsers={fetchUsers} setusers={setusers} />
    </main>
  );
};

export default App;
