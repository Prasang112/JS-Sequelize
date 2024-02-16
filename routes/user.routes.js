import express from "express";
import { signUp, getUserByEmail, userList, ByPk, signIn } from "../controller/user.controller.js";
import { body } from "express-validator";

const router = express.Router();

router.post("/signup",
    body("email", "Invaild email Id").isEmail(),
    body("password", "Password is required").notEmpty(),
    body("password", "Password must have at least 5 letter").isLength({ min: 5 }),
    body("name", "Name is required").notEmpty(),
    body("name", "Only alphabates are allowed").isAlpha(),
    signUp); 

router.post("/signin", signIn);
router.get("/list", userList);
router.post("/byEmail", getUserByEmail);
router.post("/ByPk", ByPk);

export default router;