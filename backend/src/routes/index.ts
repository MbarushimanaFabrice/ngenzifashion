import { Router } from "express";
import UserRoute from "./UserRoute";
import ShopRoute from "./ShopRoute";
import CategoriesRoute from "./CategoriesRoute";
import ProductRoute from "./ProductsRoute";

const router = Router();
router.use("/user", UserRoute);
router.use("/shop",ShopRoute)
router.use("/categories", CategoriesRoute);
router.use("/products", ProductRoute);

export default router;
