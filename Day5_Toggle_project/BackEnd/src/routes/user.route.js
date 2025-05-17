import express from "express";
import {
  getUserCreate,
  postUserCreate,
  getAllUsers,
  deleteUserById
} from "../controllers/users.controller.js";

const router = express.Router();

router.get("/", getUserCreate);
router.post("/register", postUserCreate);

router.get("/users", getAllUsers);
router.delete("/users/:id", deleteUserById);

export default router;
