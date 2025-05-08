import React from "react";
import { useForm } from "react-hook-form";


const SignIN = (props) => {
  // const toggler = props.toggler;
  // const settoggler = props.settogglertoggler;      // this is old method or update method

  // const { toggler, settoggler, submitHandler } = props;

  const { toggler, settoggler} = props;
  const { register, handleSubmit} = useForm();

  const submitHandler = (data) => {
    console.log(data)
  }

  return (
    <form 
    // onSubmit={submitHandler} 
    onSubmit={submitHandler(handleSubmit)}
    className=" w-1/2 mx-auto p-2 ">
      <h1 className="text-4xl font-black mb-7 font-mono">
        Let's start the <br />
        journey
      </h1>
      <input
        className="block mb-3 font-thin border-b outline-0 p-2 w-full text-2xl"
        type="text"
        {...register("email")}
        required
        name="email"
        placeholder="email"
      />
      <input
        className="block mb-6 font-thin border-b outline-0 p-2 w-full text-2xl"
        type="password"
        {...register("password")}
        required
        name="password"
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
