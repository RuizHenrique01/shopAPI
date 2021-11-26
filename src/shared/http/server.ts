import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import AppError from "../errors/AppError";
import cors from "cors";
import routes from "./routes";
import "@shared/typeorm";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: "Error",
        message: error.message,
      });
    }

    return response.status(500).json({
      status: "Error",
      message: "Internal server error!",
    });
  }
);

app.listen(3000, () => {
  console.log("Server localhost port 3000 is connect!");
});
