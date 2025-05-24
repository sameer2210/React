/* eslint-disable no-unused-vars */
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SignIN = (props) => {
  // const toggler = props.toggler;
  // const settoggler = props.settogglertoggler;              // this is old method or update method
  // const { toggler, settoggler, submitHandler } = props;

  const { toggler, settoggler, users, setusers } = props;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const submitHandler = (data) => {
    console.log(data);
    const ispresent = users.find(
      (user) =>
        user.email.trim().toLowerCase() === data.email.trim().toLowerCase()
      // && user.password === data.password
    );
    if (ispresent) {
      toast.success("Login successful!");
      reset();
    } else {
      toast.error("User not Found!");
    }
  };

  return (
    <form
      // onSubmit={submitHandler}
      onSubmit={handleSubmit(submitHandler)}
      className="w-full md:w-4/5 lg:w-2/3 xl:w-1/2 mx-auto p-4 md:p-8 bg-gray-200 rounded-lg shadow-md mt-8"
    >
      <h1 className="text-3xl md:text-4xl font-black mb-7 font-mono text-gray-800">
        Let's start the <br />
        <span className="text-amber-500">journey</span>
      </h1>
      <input
        className="block mb-3 font-thin border-b text-black border-gray-300 outline-0 p-2 w-full text-xl md:text-2xl focus:border-amber-500 transition-all duration-300"
        type="text"
        {...register("email", { required: "Email is required" })}
        required
        name="email"
        placeholder="email"
      />
      {errors.email && (
        <p className="text-red-500 text-sm mt-1 mb-2">{errors.email.message}</p>
      )}
      <input
        className="block mb-6 font-thin border-b text-black border-gray-300 outline-0 p-2 w-full text-xl md:text-2xl focus:border-amber-500 transition-all duration-300"
        type="password"
        {...register("password", { required: "Password is required" })}
        required
        name="password"
        placeholder="password"
      />
      {errors.password && (
        <p className="text-red-500 text-sm mt-1 mb-2">
          {errors.password.message}
        </p>
      )}
      <button className="p-3 border border-amber-500 rounded-lg px-8 mt-7 mb-3 bg-amber-500 text-white hover:bg-amber-600 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
        Sign In
      </button>
      <br />
      <div className="mt-2">
        <small className="font-mono text-gray-600">
          Don't have an account ?{" "}
          <button
            className="text-amber-500 cursor-pointer hover:text-amber-400 font-medium"
            onClick={() => settoggler(!toggler)}
            type="button"
          >
            Sign Up
          </button>
        </small>
      </div>
    </form>
  );
};

export default SignIN;
