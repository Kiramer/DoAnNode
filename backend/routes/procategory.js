import express from "express";
import { createProCategory } from "../controllers/proCategoryController.js";

const router = express.Router();

router.post("/create", createProCategory);
export default router;
