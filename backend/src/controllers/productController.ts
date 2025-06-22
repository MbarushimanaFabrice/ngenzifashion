import { Request, Response } from "express";
import { Products, Shop } from "../models";

export const createProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    // create product
    const {
      shop_id,
      name,
      description,
      price,
      compare_at_price,
      cost_per_item,
      sku,
      quantity,
      size,
      color,
      category,
      gender,
      is_published,
      is_featured
    } = req.body;

    const newProduct = await Products.create({
      shop_id,
      name,
      description,
      price,
      compare_at_price,
      cost_per_item,
      sku,
      quantity,
      size,
      color,
      category,
      gender,
      is_published,
      is_featured
    });

    res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: newProduct
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};
