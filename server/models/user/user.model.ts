import mongoose from "mongoose";

export interface User {
	username: string;
	name?: string;
	email: string;
	password: string;
	isAdmin?: boolean;
}

const userSchema = new mongoose.Schema(
	{
		username: { type: String, required: true, unique: true },
		name: { type: String, required: false },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		isAdmin: { type: Boolean, required: false },
	},
	{ timestamps: true },
);

userSchema.pre(/^find/, function (next) {
	this.select("-__v -_id");
	next();
});

export const userModel = mongoose.model("user", userSchema);
