import express from "express";
import {
  createProduct,
  updateProduct,
  deleteProduct,
  getSingleProduct,
  getAllProduct,
} from "../controllers/productController.js";

const router = express.Router();

router.post("/create", createProduct);
router.put("/update/:id", updateProduct);
router.delete("/delete/:id", deleteProduct);
router.get("/singleProduct/:id", getSingleProduct);
router.get("/all", getAllProduct);
export default router;
