import React from "react";
import { useForm } from "react-hook-form";

const HookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="border-2 "
          placeholder="fullname"
          type="text"
          {...register("fullName", {
            required: "Full name is required",
            minLength: 4,
            maxLength: 16,
          })}
        />
        <p
          className={`${
            errors?.fullname?.type === "minLength"
              ? "block text-red-500"
              : "hidden"
          }`}
        >
          There must be atleast 4 characters name
        </p>

        <input type="submit" />
      </form>
    </div>
  );
};

export default HookForm;
