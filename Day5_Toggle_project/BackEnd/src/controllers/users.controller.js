import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";

export const getUserCreate = (req, res) => {
  const { error } = req.query;
  res.render("register", { errors });
};

export const postUserCreate = async (req, res) => {
  const error = validationResult(req);
  if (!errors.isEmpty()) {
    return res.redirect("/register ? error = Invalid data, try again!");
  }

  try {
    const { userName, email, password } = req.body;

    const existUser = await userModel.findone({ email });
    if (existUser) {
      return res.redirect("/register ? error = User already exists");
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
