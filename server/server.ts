import express from "express";
import connectDB from "./config/database";
import PORT from "./config/env";
import router from "./routes";

const dbcon = connectDB();

export default class Server {
	PORT: number;
	app: express.Application;

	constructor() {
		this.app = express();
		this.PORT = PORT;
	}

	start() {
		// this.database = connectDB();
		this.middlewares();
		this.app.use("/", router);
		this.listen();
	}

	middlewares() {}

	listen() {
		this.app.listen(this.PORT, () => {
			console.log(`App running on http://localhost:${this.PORT}`);
		});
	}
}
