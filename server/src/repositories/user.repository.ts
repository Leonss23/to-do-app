import bcrypt from "bcrypt";
import { FilterQuery, Types, _FilterQuery } from "mongoose";
import { userModel, User } from "../models/user.model";

class UserRepository {
  async findAll() {
    return await userModel.find({}).exec();
  }

  async find(filter: {
    email?: string;
    password?: string;
    _id?: string | number | Types.ObjectId;
  }) {
    return await userModel.findOne(filter).exec();
  }

  async logIn({ email, password }: User) {
    if (!(email && password)) throw Error("Missing fields.");

    const user = await userModel.findOne({ email });

    if (!user?.password) throw Error("Incorrect credentials");

    const passwordMatches = await bcrypt.compare(password, user.password);

    if (!passwordMatches) throw Error("Incorrect credentials");

    return user;
  }

  async signUp({ email, password }: User) {
    if (!(email && password)) throw Error("Missing fields.");

    const exists = await userModel.findOne({ email });
    if (exists) throw Error("Email in use");

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user: User = { email, password: hashedPassword };
    return await userModel.create(user);
  }

  async delete(id: number) {
    return await userModel.findByIdAndDelete(id);
  }

  // async update(id: number) {
  // 	return await userModel.findByIdAndUpdate(id,);
  // }
}

export default new UserRepository();
