import { Router } from "express";
import {
  createShop,
  getShops,
  getShopById,
  updateShop
} from "../controllers/shopController";
const router = Router();

router.post("/",createShop);
router.get("/",getShops);
router.get("/:shop_id",getShopById);
router.put("/:shop_id",updateShop)

export default router;