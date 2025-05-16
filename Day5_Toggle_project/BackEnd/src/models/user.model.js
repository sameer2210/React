import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "userName is Required"],
      trim: true,
      minlength: 3,
      maxlength: 17
    },
    email: {
      type: String,
      required: [true, "email is Required"],
      trim: true,
      unique: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"]
    },
    password: {
      type: String,
      required: [true, "password is Required"],
      trim: true,
      minlength: 3
    }
  },
  {
    timestamps: true
  }
);

const userModel = mongoose.model("user", userSchema);

export default userModel;
