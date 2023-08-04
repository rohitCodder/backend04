import express from "express";
import { getmyprofile, login, logout, register } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/me", isAuthenticated, getmyprofile);
router.get("/logout", isAuthenticated, logout);

export default router;
