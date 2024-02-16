import express from "express";
import { saveInBulk, productById } from "../controller/product.controller.js";

const router = express.Router();

router.post("/save-in-bulk", saveInBulk);
router.post("/byID", productById);


export default router;