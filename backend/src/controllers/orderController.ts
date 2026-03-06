import { Request, Response } from "express";
import { Orders } from "../models";

export const createOrder = async (
  req: Request,
  res: Response
): Promise<void> => {
  // create a new order
  try {   
    const {
      order_number,
      user_id,
      shop_id,
      order_status,  
      subtotal,   
      tax_amount = 0.0,  
      shipping_amount = 0.0,
      discount_amount = 0.0,
      total_amount,  
      payment_method,
      payment_status = "pending",
      shipping_address_id,
      billing_address_id,  
      notes
    } = req.body;

    const newOrder = await Orders.create({
      order_number,
      user_id,
      shop_id,
      order_status,
      subtotal,
      tax_amount,
      shipping_amount,
      discount_amount,
      total_amount,
      payment_method,
      payment_status,
      shipping_address_id,
      billing_address_id,
      notes
    });

    res.status(201).json({
      success: true,
      message: "Order created successfully",
      data: newOrder
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// // get all orders
export const getAllOrders = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const orders = await Orders.findAll({
      order: [["createdAt", "DESC"]]
    });

    res.status(200).json({
      success: true,
      data: orders
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// // get a single order by id
export const getOrderById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const order = await Orders.findByPk(id);

    if (!order) {
      res.status(404).json({
        success: false,
        message: "Order not found"
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: order
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// // update an order
export const updateOrder = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const {
      order_number,
      user_id,
      shop_id,
      order_status,
      subtotal,
      tax_amount,
      shipping_amount,
      discount_amount,
      total_amount,
      payment_method,
      payment_status,
      shipping_address_id,
      billing_address_id,
      notes
    } = req.body;

    const order = await Orders.findByPk(id);
    if (!order) {
      res.status(404).json({
        success: false,
        message: "Order not found"
      });
      return;
    }

    await order.update({
      order_number,
      user_id,
      shop_id,
      order_status,
      subtotal,
      tax_amount,
      shipping_amount,
      discount_amount,
      total_amount,
      payment_method,
      payment_status,
      shipping_address_id,
      billing_address_id,
      notes
    });

    res.status(200).json({
      success: true,
      message: "Order updated successfully",
      data: order
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};
// // delete an order
export const deleteOrder = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const order = await Orders.findByPk(id);

    if (!order) {
      res.status(404).json({
        success: false,
        message: "Order not found"
      });
      return;
    }

    await order.destroy();

    res.status(200).json({
      success: true,
      message: "Order deleted successfully"
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};
