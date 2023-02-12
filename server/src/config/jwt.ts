import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { JWT_SECRET } from "../config/env";

export function createToken(_id: mongoose.Types.ObjectId) {
  return jwt.sign({ _id }, JWT_SECRET, { expiresIn: "3d" });
}
