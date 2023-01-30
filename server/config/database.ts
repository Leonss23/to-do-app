import mongoose from "mongoose";
mongoose.set("strictQuery", false);

export default async function () {
	let db =  await mongoose.connect(process.env.MONGO_URI as string);
}
