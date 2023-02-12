import { Router } from "express";
import { validateCredentials } from "../../config/validation";
import userRouter from "./user.route";

const router = Router();

router.use("/user", ...validateCredentials, userRouter);
// router.use("/todos", todosRouter);

export default router;
