/* eslint-disable no-unused-vars */
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SignIN = (props) => {
  // const toggler = props.toggler;
  // const settoggler = props.settogglertoggler;      // this is old method or update method
  // const { toggler, settoggler, submitHandler } = props;

  const { toggler, settoggler, users, setusers } = props;
  const { register, handleSubmit, reset } = useForm();

  const submitHandler = (data) => {
    console.log(data);
    const ispresent = users.find(
      (user) => user.email === data.email && user.password === data.password
    );
    if (ispresent) {
      toast.success("User Already Exists!");
      reset();
    } else {
      toast.error("User not Found!");
    }
  };

  return (
    <form
      // onSubmit={submitHandler}
      onSubmit={handleSubmit(submitHandler)}
      className=" w-1/2 mx-auto p-2 "
    >
      <h1 className="text-4xl font-black mb-7 font-mono">
        Let's start the <br />
        journey
      </h1>
      <input
        className="block mb-3 font-thin border-b outline-0 p-2 w-full text-2xl"
        type="text"
        {...register("email", { required: "Email is required" })}
        required
        name="email"
        placeholder="email"
      />
      <input
        className="block mb-6 font-thin border-b outline-0 p-2 w-full text-2xl"
        type="password"
        {...register("password", { required: "Password is required" })}
        required
        name="password"
        placeholder="password"
      />
      <button className="p-2 border rounded-lg px-8 mt-7 mb-3 hover:bg-amber-50 hover:text-black duration-250 ">
        SignIn
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
