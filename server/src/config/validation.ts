import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";

export const validateCredentials = [
  body("email").isEmail(),
  body("password").isLength({ min: 8 }),
  async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    next();
  },
];
