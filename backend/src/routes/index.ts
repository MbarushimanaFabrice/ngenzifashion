import { Router } from "express";
import UserRoute from "./UserRoute";
import ShopRoute from "./ShopRoute";
import CategoriesRoute from "./CategoriesRoute";
import ProductRoute from "./ProductsRoute";
import Product_variantsRoute from "./Product_variantsRoute";
import discountRoutes from "./discountRoutes"
import ProductImageRoute from "./ProductImageRoute"; 
import OrderRoute from "./orderRoute";
import Customer_addressesRoutes from "./Customer_addressesRoutes"
import PaymentRoute from "./PaymentRoute";
import Order_ItemsRoute from "./order_ItemsRoute";


const router = Router();
router.use("/user", UserRoute);
router.use("/shop",ShopRoute)
router.use("/categories", CategoriesRoute);
router.use("/products", ProductRoute);
 router.use("/product_variants",Product_variantsRoute);
router.use("/discount",discountRoutes)
router.use("/product_images", ProductImageRoute);
router.use("/orders", OrderRoute);
router.use("/customer_addresses", Customer_addressesRoutes);
router.use("/payments", PaymentRoute);
router.use("/order_items", Order_ItemsRoute);
 
export default router;
