import React from "react";

const SignIN = (props) => {
  // const toggler = props.toggler;
  // const settoggler = props.settogglertoggler;      // this is old method or update method

  const { toggler, settoggler } = props;

  return (
    <form className=" w-1/2 mx-auto p-3 ">
      <h1 className="text-5xl font-black mb-7 font-mono">
        Let's start the <br />
        journey
      </h1>

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
        Don't have an account ?{" "}
        <button
          className=" text-amber-500 cursor-pointer hover:text-amber-400"
          onClick={() => settoggler(!toggler)}
          type="button"
        >
          SignUp
        </button>
      </small>
    </form>
  );
};

export default SignIN;
