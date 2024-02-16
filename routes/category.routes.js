import express from "express";
import { fetchCategoryByProduct, saveInBulk, categoryByName } from "../controller/category.controller.js";
const router = express.Router();

router.post("/save-in-bulk", saveInBulk);

router.get("/categoryproduct", fetchCategoryByProduct);

router.get("/categoryname", categoryByName);

export default router;