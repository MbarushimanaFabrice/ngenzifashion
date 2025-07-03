import { Router } from "express";
import {
  createProductVariant,
  getAllProductVariants,
  getProductVariantsByProductId,
  updateProductVariant,
  deleteProductVariant
} from "../controllers/product_variantsController";

const router = Router();

// Create Product Variant
router.post("/", createProductVariant);
// Get All Product Variants
router.get("/", getAllProductVariants);
// Get Product Variants by Product ID
router.get("/:product_id", getProductVariantsByProductId);
// Update Product Variant
router.put("/:id", updateProductVariant);
// Delete Product Variant
router.delete("/:id", deleteProductVariant);

export default router;