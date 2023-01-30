import { Router } from "express";
import apiRouter from "./api";

const router = Router();

router.use("/api", apiRouter);
// router.use("/",clientRouter);

export default router;
