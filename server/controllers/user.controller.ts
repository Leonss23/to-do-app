import { Request, Response } from "express";
import { userRepository } from "../models";

export async function getUsers(req: Request, res: Response) {
	try {
		const users = await userRepository.findAll();
		res.status(200).json({ data: users });
	} catch (error) {
		res.status(500).json({ message: "Error fetching users", error });
	}
}

export async function newUser(req: Request, res: Response) {
	try {
		console.log(req.body);
		const newUser = await userRepository.create(req.body);
		res.status(200).json({ data: newUser });
	} catch (error) {
		res.status(500).json({ message: "Error creating user", error });
	}
}
