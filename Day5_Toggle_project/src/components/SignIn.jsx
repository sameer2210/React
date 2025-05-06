import React from "react";

const SignIN = () => {
  return (
    <div className="h-screen w-screen bg-gray-900 text-2xl text-white p-10 ">
      <form className=" w-1/2 mx-auto p-3 ">
        <h1 className="text-5xl font-black mb-7 font-mono">
          Let's start the <br />
          journey
        </h1>
        <input
          className="block mb-4 font-thin border-b outline-0 p-2 w-5/6 text-2xl"
          type="text"
          placeholder="Name"
        />
        <input
          className="block mb-3 font-thin border-b outline-0 p-2 w-5/6 text-2xl"
          type="text"
          placeholder="email"
        />
        <input
          className="block mb-6 font-thin border-b outline-0 p-2 w-5/6 text-2xl"
          type="password"
          placeholder="password"
        />
        <button className="p-2 border rounded-lg px-8 mt-7 mb-3 hover:bg-amber-50 hover:text-black duration-250 ">
          Signup
        </button>
        <br />
        <small className="font-mono ">
          Already have an account ? <button type="button">Signin</button>
        </small>
      </form>
    </div>
  );
};

export default SignIN;
