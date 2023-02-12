import express from "express";
import mongoose from "mongoose";
import connectDB from "./config/database";
import { PORT } from "./config/env";
import router from "./routes";

export default class Server {
  PORT;
  app: express.Application;
  database: typeof mongoose | undefined;

  constructor() {
    this.app = express();
    this.PORT = PORT;

    this.start();
  }

  async start() {
    this.database = await connectDB();
    this.middlewares();
    this.app.use("/", router);
    this.listen();
  }

  middlewares() {
    this.app.use(express.json());
  }

  private listen() {
    this.app.listen(this.PORT, () => {
      console.log(`App running on http://localhost:${this.PORT}`);
    });
  }
}
