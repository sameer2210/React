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
    <main className="lg:h-screen lg:w-screen lg:flex  lg:justify-center lg:items-start sm:items-center overflow-hidden text-xl text-white ">
      
      <div className="w-1/2">
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

      <div className="w-[570px] h-[560px] mt-8 px-12 py-4 rounded-2xl bg-gradient-to-br from-amber-700 to-amber-500 ">
      {/* <Users data={data} /> */}
      <Users users={users} fetchUsers={fetchUsers} setusers={setusers} />
      </div>

    </main>
  );
};

export default App;
