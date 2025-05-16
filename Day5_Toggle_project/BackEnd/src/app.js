import express, { urlencoded } from "express";
import cors from "cors";
import userRouter from "./routes/user.route";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", userRouter);

export default app;
