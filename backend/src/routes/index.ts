import { Router } from "express";
import UserRoute from "./UserRoute";
import ShopRoute from "./ShopRoute";
import CategoriesRoute from "./CategoriesRoute";
import ProductRoute from "./ProductsRoute";
import discountRoutes from "./discountRoutes"
import ProductImageRoute from "./ProductImageRoute"; 
import OrderRoute from "./orderRoute";
import PaymentRoute from "./paymentRoute";

const router = Router();
router.use("/user", UserRoute);
router.use("/shop",ShopRoute)
router.use("/categories", CategoriesRoute);
router.use("/products", ProductRoute);
router.use("/discount",discountRoutes)
router.use("/product_images", ProductImageRoute);
router.use("/orders", OrderRoute);
router.use("/payments", PaymentRoute);
 
export default router;
