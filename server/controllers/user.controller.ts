import { Request, Response } from "express";
import { userRepository } from "../repositories";

export async function getUsers(req: Request, res: Response) {
	try {
		const users = await userRepository.findAll();
		res.status(200).json({ data: users });
	} catch (error) {
		res.status(500).json({ message: "Error fetching users", error });
	}
}

export async function getUser(req: Request, res: Response) {
	try {
		const id: number = Number.parseInt(req.params.id);
		if (id) {
			const users = await userRepository.find(id);
			res.status(200).json({ data: users });
		}
	} catch (error) {
		res.status(500).json({ message: "Error fetching users", error });
	}
}

export async function createUser(req: Request, res: Response) {
	try {
		const newUser = await userRepository.create(req.body);
		res.status(200).json({ data: newUser });
	} catch (error) {
		res.status(500).json({ message: "Error creating user", error });
	}
}

export async function deleteUser(req: Request, res: Response) {
	try {
		const id: number = Number.parseInt(req.params.id);
		if (id) {
			const user = await userRepository.delete(id);
			res.status(200).json({ data: user });
		}
	} catch (error) {
		res.status(500).json({ message: "Error creating user", error });
	}
}
