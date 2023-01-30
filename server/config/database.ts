import mongoose from "mongoose";
mongoose.set("strictQuery", false);

export default async function () {
	return await mongoose.connect(process.env.MONGO_URI as string);
}
