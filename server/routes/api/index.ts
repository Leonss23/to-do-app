import { Router } from "express";
import usersRouter from "./users.route";

const router = Router();

router.use("/users", usersRouter);
// router.use("/todos", todosRouter);

export default router;
