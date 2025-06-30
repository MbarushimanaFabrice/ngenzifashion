import { Router } from "express";
import { createPayment, getAllPayments, getPaymentById,updatePayment,deletePayment } from "../controllers/paymentController";

// Initialize the router
const router = Router();
// Route to create a new payment
router.post("/", createPayment);
// Route to get all payments
router.get("/", getAllPayments);
// Route to get a payment by ID
router.get("/:id", getPaymentById);
// Route to update a payment by ID  
router.put("/:id", updatePayment);
// Route to delete a payment by ID
router.delete("/:id", deletePayment);
// Export the router
export default router;