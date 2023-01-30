import { Router } from "express";
import * as userController from "../../controllers/user.controller";

const router = Router();

router.get("/", userController.getUsers);
router.post("/", userController.newUser);

export default router;
