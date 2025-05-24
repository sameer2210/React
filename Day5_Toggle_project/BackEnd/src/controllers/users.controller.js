import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";
import userModel from "../models/user.model.js";

export const getUserCreate = (req, res) => {
  const { error } = req.query;
  res.render("SignUp", { errors });
};

export const postUserCreate = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.redirect("/SignUp ? errors = Invalid data, try again!");
  }

  try {
    const { userName, email, password } = req.body;

    const existUser = await userModel.findOne({ email });
    if (existUser) {
      return res.redirect("/SignUp ? errors = User already exists");
    }

    const hashpassword = await bcrypt.hash(password, 10);
    const newUser = await userModel.create({
      userName,
      email,
      password: hashpassword
    });

    const token = jwt.sign({ id: newUser._id, email: newUser.email }, "Sam", {
      expiresIn: "1h"
    });

    res.cookie("token", token);
    res.json(newUser);
  } catch (error) {
    console.log("User Registration error ", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find().select("-password"); // don't return password
    res.status(200).json(users);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Delete user by ID
export const deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await userModel.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    console.error("Error deleting user:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
