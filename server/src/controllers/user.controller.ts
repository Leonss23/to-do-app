import { Request, Response } from "express";
import { userRepository } from "../repositories";
import { createToken } from "../config/jwt";

export async function loginUser(req: Request, res: Response) {
  const { email, password } = req.body;
  try {
    const user = await userRepository.logIn({ email, password });

    if (!user) throw Error("Incorrect credentials");

    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
}

export async function signupUser(req: Request, res: Response) {
  const { email, password } = req.body;
  try {
    const user = await userRepository.signUp({ email, password });

    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(500).json({
      msg: "Error, Signup failed.",
      error: (error as Error).message,
    });
  }
}

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
    const _id = req.params.id;
    if (_id) {
      const users = await userRepository.find({ _id });
      res.status(200).json({ data: users });
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
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
