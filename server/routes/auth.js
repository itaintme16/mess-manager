import express from "express";
import { forgotPassword, login, resetPassword } from "../controllers/auth.js";

const router = express.Router();

router.post("/login", login);

router.post("/forgot", forgotPassword);

router.post("/resetpassword", resetPassword);

export default router;
