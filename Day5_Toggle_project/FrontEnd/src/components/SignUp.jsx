import React from "react";
import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import SignIN from "./SignIn";
import { toast } from "react-toastify";
import axios from "axios";

const SignUp = (props) => {
  // const { toggler, settoggler, submitHandler } = props;

  const { toggler, settoggler, users, setusers } = props;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const submitHandler = async (data) => {
    // const ispresent = users.find((user) => user.email === data.email);       //if frontend only use
    // if (ispresent) {
    //   toast.error("User already Exists!");
    //   reset();
    // } else {
    //   data.id = nanoid();
    //   setusers([...users, data]);           // or
    //      // const copyusers = [...users];
    //      // copyusers.push(data);
    //      // setusers(copyusers);
    //   toast.success("User successfully register!");
    //   reset();
    // }
    // console.log(data);

    try {
      data.id = nanoid();
      const response = await axios.post("http://localhost:3000/register", data);
      console.log("server response", response.data);
      toast.success("User registered successfully!");
      const usersResponse = await axios.get("http://localhost:3000/users");
      setusers(usersResponse.data);
      reset();
    } catch (err) {
      console.error("Registration error:", err);
      toast.error("Failed to register user");
    }
  };
  console.log(users);

  return (
    <form
      // onSubmit={submitHandler}
      onSubmit={handleSubmit(submitHandler)}
      className=" w-1/2 mx-auto p-3 "
    >
      <h1 className="text-4xl font-black mb-7 font-mono">
        Register to the <br />
        journey
      </h1>
      <input
        className="block mb-4 font-thin border-b outline-0 p-2 w-full text-2xl"
        type="text"
        {...register("userName")}
        required
        name="userName"
        placeholder="Name"
      />
      <input
        className="block mb-3 font-thin border-b outline-0 p-2 w-full text-2xl"
        type="text"
        // required
        {...register("email", { required: "Email is required" })}
        name="email"
        placeholder="email"
      />
      {errors.email && (
        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
      )}
      <input
        className="block mb-6 font-thin border-b outline-0 p-2 w-full text-2xl"
        type="password"
        {...register("password", { minLength: 5 })}
        required
        name="password"
        placeholder="password"
      />
      {errors.password?.type === "minLength" ? (
        <p className="text-red-500 text-sm mt-1">
          atleast 5 characters required
        </p>
      ) : (
        ""
      )}

      <button className="p-2 border rounded-lg px-8 mt-7 mb-3 hover:bg-amber-50 hover:text-black duration-250 ">
        Register
      </button>
      <br />
      <small className="font-mono ">
        Already have an account ?
        <button
          className=" text-amber-500 cursor-pointer hover:text-amber-400"
          onClick={() => settoggler(!toggler)}
          type="button"
        >
          SignIn
        </button>
      </small>
    </form>
  );
};

export default SignUp;
