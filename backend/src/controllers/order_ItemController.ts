import { Request,Response } from "express";
import { Order_items } from "../models";

// create Order Item
export const createOrderItem = async (req: Request, res: Response): Promise<void> => 
{
  try {
    const { order_id, product_id, variant_id, quantity, price, discount_amount, total_price } = req.body;

    const newOrderItem = await Order_items.create({
      order_id,
      product_id,
      variant_id,
      quantity,
      price,
      discount_amount,
      total_price
    });

    res.status(201).json({
      success: true,
      message: "Order item created successfully",
      data: newOrderItem
    });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
}

// Get All Order Items
export const getAllOrderItems = async (_req: Request, res: Response): Promise<void> => 
{
  try {
    const orderItems = await Order_items.findAll({ order: [['createdAt', 'DESC']] });
    res.status(200).json({ success: true, data: orderItems });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
}

// Get Order Items by Order ID
export const getOrderItemsByOrderId = async (req: Request, res: Response): Promise<void> => 
{
  try {
    const { order_id } = req.params;

    const orderItems = await Order_items.findAll({
      where: { order_id },
      order: [['createdAt', 'DESC']]
    });

    if (orderItems.length === 0) {
      res.status(404).json({ success: false, message: "No order items found for this order" });
      return;
    }

    res.status(200).json({ success: true, data: orderItems });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
}


// Update Order Item by ID
export const updateOrderItem = async (req: Request, res: Response): Promise<void>=>
{
  try {
    const id = parseInt(req.params.id);
    const { order_id, product_id, variant_id, quantity, price, discount_amount, total_price } = req.body;

    const orderItem = await Order_items.findByPk(id);

    if (!orderItem) {
      res.status(404).json({ success: false, message: "Order item not found" });
      return;
    }

    await orderItem.update({
      order_id,
      product_id,
      variant_id,
      quantity,
      price,
      discount_amount,
      total_price
    });

    res.status(200).json({
      success: true,
      message: "Order item updated successfully",
      data: orderItem
    });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
}

// Delete Order Item by ID
export const deleteOrderItem = async (req: Request, res: Response): Promise<void>=>
{
  try {
    const id = parseInt(req.params.id);
    const deleted = await Order_items.destroy({ where: { order_item_id: id } });

    if (!deleted) {
      res.status(404).json({ success: false, message: "Order item not found" });
      return;
    }

    res.status(200).json({ success: true, message: "Order item deleted successfully" });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
} 












































// "Order_items",{
  //   order_item_id: {
  //     type: DataTypes.INTEGER,
  //     autoIncrement: true,
  //     primaryKey: true
  //   },
  //   order_id: {
  //     type: DataTypes.INTEGER,
  //     allowNull: false,
  //     references: {
  //       key: "order_id",
  //       model: "orders"
  //     }
  //   },
  //   product_id: {
  //     type: DataTypes.INTEGER,
  //     allowNull: false,
  //     references: {
  //       key: "product_id",
  //       model: "products"
  //     }
  //   },
  //   variant_id: {
  //     type: DataTypes.INTEGER,
  //     allowNull: true,
  //     references: {
  //       key: "variant_id",
  //       model: "product_variants"
  //     }
  //   },
  //   quantity: {
  //     type: DataTypes.INTEGER,
  //     allowNull: false
  //   },
  //   price: {
  //     type: DataTypes.DECIMAL(10, 2),
  //     allowNull: false
  //   },
  //   discount_amount: {
  //     type: DataTypes.DECIMAL(10, 2),
  //     defaultValue: 0.00
  //   },
  //   total_price: {
  //     type: DataTypes.DECIMAL(10, 2),
  //     allowNull: false
  //   }