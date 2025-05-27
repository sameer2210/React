// ---------------------------------------------------Aayush code --------------------------------------------------

// import React from "react";

// const Users = ({ data }) => {
//   return (
//     <div className="w-1/3  bg-gray-800 rounded-xl px-4 py-2 ">
//       {data.length === 0 ? (
//         <h1>No user created </h1>
//       ) : (
//         data.map((e, idx) => (
//           <div key={idx}>
//             <p className="px-4 py-2 bg-gray-700 rounded-xl mb-2 hover:bg-gray-600">
//               <span className=" text-2xl font-medium font-mono ">
//                 <h1>UserName: {e.name}</h1>
//               </span>
//               <p className="text-xl font-light">email: {e.email}</p>
//             </p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default Users;

//------------------------------------------------Bhaiya----------------------------------------------------------

// import React from "react";

// const Users = (props) => {
//   const { users, setusers } = props;

//   const deletehandler = (id) => {
//     const copyusers = [...users];
//     const filteredusers = copyusers.filter((user) => user.id !== id);
//     setusers(filteredusers);
//   };

//   const userlist = users.map((user) => {
//     return (
//       <li
//         key={user.id}
//         className="flex items-center justify-between bg-gray-700 rounded p-2 font-thin mb-3"
//       >
//         <p>
//           <span className="block text-3xl mb-1">{user.userName}</span>
//           <small className="text-lg">{user.email}</small>
//         </p>
//         <span
//           onClick={() => deletehandler(user.id)}
//           className="hover:cursor-pointer font-normal text-red-500"
//         >
//           Delete
//         </span>
//       </li>
//     );
//   });

//   return (
//     <ul className="w-[30%] ">
//       {users.length !== 0 ? (
//         userlist
//       ) : (
//         <h1 className="text-center mt-10 text-3xl">User not found</h1>
//       )}
//     </ul>
//   );
// };

// export default Users;

// ----------------------------------------------------me----------------------------------------------------------
import axios from "axios";
import React, { useState } from "react";

const Users = ({ users, setusers }) => {
  const [isLoading, setIsLoading] = useState(false);

  const deletehandler = async (id) => {
    try {
      setIsLoading(true);
      await axios.delete(`http://localhost:3000/users/${id}`);
      setusers(users.filter((user) => user._id !== id));
    } catch (err) {
      console.error("Error deleting user:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const userlist = users.map((user) => (
    <li
      key={user._id}
      className="flex flex-col sm:flex-row sm:items-center justify-between border-1 border-grey-50 hover:border-2 hover:bg-[#1b2b31] rounded-lg p-4 mb-4 transition-all duration-300 shadow-md"
    >
      <div className="mb-2 sm:mb-0">
        <h3 className="text-xl sm:text-2xl font-semibold font-mono text-white">
          {user.userName}
        </h3>
        <p className="text-gray-400 font-sans  text-md sm:text-lg">{user.email}</p>
      </div>
      <button
        onClick={() => deletehandler(user._id)}
        className="px-4 py-2 bg-gradient-to-br from-[#68767a] to-[#0d2c36] text-white hover:bg-gray-200 hover:shadow-lg  transform hover:scale-105 rounded-md text-sm font-medium transition-colors duration-300"
      >
        Delete
      </button>
    </li>
  ));

  if (!users) return null;

  return (
    <div className="h-[80vh] w-full overflow-y-auto p-6  mt-8 ">
      <h2 className="text-3xl md:text-4xl font-black mb-7 fixed top-10 right-59 font-mono text-white">
        User Management
      </h2>
      {isLoading ? (
        <div className="flex justify-center items-center h-40 ">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
        </div>
      ) : (
        <ul className="w-full">
          {users.length !== 0 ? (
            userlist
          ) : (
            <div className="text-center p-8 bg-[#103643] rounded-lg">
              <h1 className="text-2xl sm:text-3xl font-medium text-white">
                No users found
              </h1>
              <p className="text-gray-400 mt-2">
                Try adding some users to get started
              </p>
            </div>
          )}
        </ul>
      )}
    </div>
  );
};

export default Users;
