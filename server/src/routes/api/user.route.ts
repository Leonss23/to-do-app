import { Router } from "express";
import * as userController from "../../controllers/user.controller";

const router = Router();

router.post("/login", userController.loginUser);
router.post("/signup", userController.signupUser);

router.get("/", userController.getUsers);
router.get("/:id", userController.getUser);
router.delete("/:id", userController.deleteUser);
// router.put("/:id", userController.updateUser);

export default router;
