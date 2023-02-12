import mongoose from "mongoose";

export interface User {
	email: string;
	password: string;
	isAdmin?: boolean;
}

const userSchema = new mongoose.Schema(
	{
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
