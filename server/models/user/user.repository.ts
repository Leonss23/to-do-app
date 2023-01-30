import { userModel, User } from "./user.model";

class UserRepository {
	async findAll(): Promise<User[]> {
		return await userModel.find({}).exec();
	}

	async create(user: User): Promise<User> {
		return await new userModel(user).save();
	}
}

export default new UserRepository();
