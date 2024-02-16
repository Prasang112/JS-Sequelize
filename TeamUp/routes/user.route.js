import express from "express";
import { signUp, signIn, viewAllUser, removeUser, UpdateUser } from "../controller/user.controller.js";

const router = express.Router();

router.post("/signup", signUp);

router.post("/signin", signIn);

router.post("/viewuser", viewAllUser);

router.post("/update", UpdateUser);

router.post("/removeuser", removeUser);

export default router;