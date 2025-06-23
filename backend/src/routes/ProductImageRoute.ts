import { Router } from "express";
import {
  createProductImage,
  updateProductImage,
  deleteProductImage,
  getProductImagesByProductId,
  getAllProductImages
} from "../controllers/product_imagesController";
const router = Router();
router.post("/", createProductImage);
router.get("/", getAllProductImages);
router.get("/:product_id", getProductImagesByProductId);
router.put("/:id", updateProductImage);
router.delete("/:id", deleteProductImage);
export default router;
