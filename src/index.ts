import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import * as authRoutes from "./routes/auth.router";
import mongoose from "mongoose";

dotenv.config();

const app: Express = express();

app.use(
  cors({
    origin: "http://localhost:3001",
    optionsSuccessStatus: 200,
    credentials: true,
    methods: ["GET", "POST", "DELETE", "PUT"],
  })
);

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(bodyParser.json());

const port: any = process.env.PORT;

app.use("/auth", authRoutes.router);

const monooseOptions: any = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(process.env.MONGOOSE_URI as string, monooseOptions)
  .then(() =>
    app.listen(port, () =>
      console.log(`Example app listening on port ${port}!`)
    )
  )
  .catch((err) => console.log(err));
