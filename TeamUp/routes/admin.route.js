import express from "express";
import { signUp, signIn } from "../controller/admin.contoller.js";
import { body } from "express-validator";

const router = express.Router();

router.post("/signup",
    body("email", "Invalid email Id").isEmail(),
    body("password", "Password is required").notEmpty(),
    body("password", "Password must have at least 5 letter").isLength({ min: 5 }),
    signUp);

router.post("/signin", signIn);

export default router;