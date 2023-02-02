import mongoose from "mongoose";
import { userModel, User } from "../models/user.model";

class UserRepository {
	async findAll(): Promise<User[]> {
		return await userModel.find({}).exec();
	}

	async find(id: number): Promise<User | null> {
		return await userModel.findById(id).exec();
	}

	async create(user: User): Promise<User> {
		return await new userModel(user).save();
	}

	async delete(id: number): Promise<mongoose.Document | null> {
		return await userModel.findByIdAndDelete(id);
	}

	// async update(id: number): Promise<mongoose.Document | null> {
	// 	return await userModel.findByIdAndUpdate(id,);
	// }
}

export default new UserRepository();
