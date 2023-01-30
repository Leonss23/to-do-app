import express from "express";
import mongoose from "mongoose";
mongoose.set("strictQuery", false);
import PORT from "./config/env";
import router from "./routes";

export default class Server {
	PORT: number;
	app: express.Application;

	constructor() {
		this.app = express();
		this.PORT = PORT;

		this.middlewares();
		mongoose.connect(process.env.MONGO_URI as string);

		this.app.use("/", router);
		this.listen();
	}

	async middlewares() {}

	listen() {
		this.app.listen(this.PORT, () => {
			console.log(`App running on http://localhost:${this.PORT}`);
		});
	}
}
