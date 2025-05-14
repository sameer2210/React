import React from "react";
import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import SignIN from "./SignIn";

const SignUp = (props) => {
  // const { toggler, settoggler, submitHandler } = props;

  const { toggler, settoggler, users, setusers } = props;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const submitHandler = (data) => {
    data.id = nanoid();
    const copyusers = [...users];
    copyusers.push(data);
    setusers(copyusers);
    reset();

    // setusers([...users,data])        //or
    // console.log(data);
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
        {...register("name")}
        required
        name="name"
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
        <p className="text-red-500 text-sm mt-1">atleast 5 characters required</p>
      ) : (
        ""
      )}

      <button className="p-2 border rounded-lg px-8 mt-7 mb-3 hover:bg-amber-50 hover:text-black duration-250 ">
        SignUp
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
