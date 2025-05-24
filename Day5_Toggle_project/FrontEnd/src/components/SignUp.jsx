/* eslint-disable no-unused-vars */
import React from "react";
import SignIN from "./SignIn";
import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";

const SignUp = (props) => {
  // const { toggler, settoggler, submitHandler } = props;

  const { toggler, settoggler, users, setusers, fetchUsers } = props;
  console.log(fetchUsers);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const submitHandler = async (data) => {
    try {
      data.id = nanoid();
      await axios.post("http://localhost:3000/register", data);
      toast.success("User registered successfully!");

      // Debug here:
      const res = await fetchUsers(); // call fetchUsers
      console.log("Users after fetch:", res);

      reset();
    } catch (err) {
      console.error("Registration error:", err);
      toast.error("Failed to register user");
    }
  };

  // const submitHandler = async (data) => {
  //   // const ispresent = users.find((user) => user.email === data.email);       //if frontend only use
  //   // if (ispresent) {
  //   //   toast.error("User already Exists!");
  //   //   reset();
  //   // } else {
  //   //   data.id = nanoid();
  //   //   setusers([...users, data]);           // or
  //   //      // const copyusers = [...users];
  //   //      // copyusers.push(data);
  //   //      // setusers(copyusers);
  //   //   toast.success("User successfully register!");
  //   //   reset();
  //   // }
  //   // console.log(data);

  //   try {
  //     data.id = nanoid();
  //     const response = await axios.post("http://localhost:3000/register", data);
  //     console.log("server response", response.data);
  //     toast.success("User registered successfully!");
  //     const usersResponse = await axios.get("http://localhost:3000/users");
  //     setusers(usersResponse.data);
  //     reset();
  //   } catch (err) {
  //     console.error("Registration error:", err);
  //     toast.error("Failed to register user");
  //   }
  // };
  console.log(users);

  return (
    <div className="min-h-screen flex items-center justify-center rounded  ">
      <form
        // onSubmit={submitHandler}
        onSubmit={handleSubmit(submitHandler)}
        className="w-full md:w-4/5 xl:w-1/2 mx-auto bg-gray-200 mb-16 p-4 md:px-8 md:py-8 rounded-lg shadow-md"
      >
        <h1 className="text-3xl md:text-4xl font-black mb-7 font-mono text-gray-800">
          Register to the <br />
          <span className="text-amber-700">journey</span>
        </h1>

        <input
          className="block mb-3 font-thin border-b text-black border-gray-300 outline-0 p-2 w-full text-xl md:text-2xl focus:border-amber-500 transition-all duration-300"
          type="text"
          {...register("userName")}
          required
          name="userName"
          placeholder="Name"
        />
        {errors.userName && (
          <p className="text-red-500 text-sm mt-1 mb-2">{errors.userName}</p>
        )}

        <input
          className="block mb-3 font-thin border-b text-black border-gray-300 outline-0 p-2 w-full text-xl md:text-2xl focus:border-amber-500 transition-all duration-300"
          type="text"
          required
          {...register("email", { required: "Email is required" })}
          name="email"
          placeholder="email"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1 mb-2">{errors.email}</p>
        )}

        <input
          className="block mb-5 font-thin border-b text-black border-gray-300 outline-0 p-2 w-full text-xl md:text-2xl focus:border-amber-500 transition-all duration-300"
          type="password"
          {...register("password", { minLength: 5 })}
          required
          name="password"
          placeholder="password"
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1 mb-2">
            atleast 5 characters required
          </p>
        )}

        <button
          // onClick={submitHandler}
          type="submit"
          className="p-3 border border-amber-100 rounded-lg px-8 mt-7 mb-3 bg-amber-700 text-white hover:bg-amber-600 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Register
        </button>

        <br />

        <div className="mt-2">
          <small className="font-mono text-gray-600">
            Already have an account ?{" "}
            <button
              className="text-amber-700 cursor-pointer hover:text-amber-400 font-medium"
              onClick={() => settoggler(!toggler)}
              type="button"
            >
              SignIn
            </button>
          </small>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
