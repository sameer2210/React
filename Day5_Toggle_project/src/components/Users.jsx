import React from "react";

const Users = ({ data }) => {
  return (
    <div className="w-1/3  bg-gray-800 rounded-xl px-4 py-2 ">
      {data.length === 0 ? (
        <h1>No user created </h1>
      ) : (
        data.map((e, idx) => (
          <div key={idx}>
            <p className="px-4 py-2 bg-gray-700 rounded-xl mb-2 hover:bg-gray-600">
              <span className=" text-2xl font-medium font-mono ">
                <h1>UserName: {e.name}</h1>
              </span>
              <p className="text-xl font-light">email: {e.email}</p>
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default Users;
