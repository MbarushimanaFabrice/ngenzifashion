import { Router } from "express";
import UserRoute from "./UserRoute";
import ShopRoute from "./ShopRoute";
const router = Router();
router.use("/user", UserRoute);
router.use("/shop",ShopRoute)

export default router;
