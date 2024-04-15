import express from "express";
import userRouter from "./routers/Route.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";

export const app = express();

config({
  path: "./data/config.env",
});
//use of middleware

app.use(express.json());
app.use("api/v1/user", userRouter);
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("hello 4000 server");
});
