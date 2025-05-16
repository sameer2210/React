import express from "express";
import {
  getUserCreate,
  postUserCreate
} from "../controllers/userController.js";

const router = express.Router();

router.get("/", getUserCreate);
router.post("/register", postUserCreate);

export default router;
