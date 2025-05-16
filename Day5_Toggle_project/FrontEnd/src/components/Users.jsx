import React from "react";

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

const Users = (props) => {
  const { users, setusers } = props;

  const deletehandler = (id) => {
    const copyusers = [...users];
    const filteredusers = copyusers.filter((user) => user.id !== id);
    setusers(filteredusers);
  };

  const userlist = users.map((user) => {
    return (
      <li
        key={user.id}
        className="flex items-center justify-between bg-gray-700 rounded p-2 font-thin mb-3"
      >
        <p>
          <span className="block text-3xl mb-1">{user.name}</span>
          <small className="text-lg">{user.email}</small>
        </p>
        <span
          onClick={() => deletehandler(user.id)}
          className="hover:cursor-pointer font-normal text-red-500"
        >
          Delete
        </span>
      </li>
    );
  });

  return (
    <ul className="w-[30%] ">
      {users.length !== 0 ? (
        userlist
      ) : (
        <h1 className="text-center mt-10 text-3xl">User not found</h1>
      )}
    </ul>
  );
};

export default Users;
