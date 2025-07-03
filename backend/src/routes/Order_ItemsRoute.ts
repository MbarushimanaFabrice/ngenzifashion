import { Router } from "express";
import { createOrderItem,getAllOrderItems,getOrderItemsByOrderId,updateOrderItem,deleteOrderItem } from "../controllers/order_ItemController";
const router = Router();

// Create Order
router.post("/", createOrderItem);
// Get All Orders
router.get("/", getAllOrderItems);
// Get Order by ID
router.get("/:id", getOrderItemsByOrderId);
// Update Order
router.put("/:id", updateOrderItem);
// Delete Order
router.delete("/:id", deleteOrderItem);
export default router;
 