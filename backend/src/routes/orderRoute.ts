import { Router } from "express";
import {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
  deleteOrder
} from "../controllers/orderController";



const router = Router();

// Create Order
router.post("/", createOrder);
// Get All Orders
router.get("/", getAllOrders);
// Get Order by ID
router.get("/:id", getOrderById);
// Update Order
router.put("/:id", updateOrder);
// Delete Order
router.delete("/:id", deleteOrder);

export default router;