import express from "express";
import { createBrand } from "../controllers/brandController.js";

const router = express.Router();

router.post("/create", createBrand);
export default router;
