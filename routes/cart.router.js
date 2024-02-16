import express from "express";
import { addToCart, fetchCartItems } from "../controller/cart.controller.js";
import { body } from "express-validator";

const router = express.Router();

router.post("/add-to-cart", addToCart);
router.get("/list", fetchCartItems);

export default router;