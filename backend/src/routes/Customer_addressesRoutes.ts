import { Router } from "express";
import {
  createCustomerAddress,
  getAllCustomerAddresses,
  getCustomerAddressById,
  updateCustomerAddress,
  deleteCustomerAddress
} from "../controllers/customer_addressesController";

// Initialize the router
const router = Router();

// Route to create a new customer address
router.post("/", createCustomerAddress);
// Route to get all customer address
router.get("/", getAllCustomerAddresses);
// Route to get a customer address by ID
router.get("/:id", getCustomerAddressById);
// Route to update a customer address by ID
router.put("/:id", updateCustomerAddress);
// Route to delete a customer address by ID
router.delete("/:id", deleteCustomerAddress);

// Export the router
export default router;
