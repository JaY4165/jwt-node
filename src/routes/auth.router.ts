import { Router } from "express";
import * as authController from "../controllers/auth.controller";

export const router: Router = Router();

router.post("/register", authController.register);

router.post("/login", authController.login);
