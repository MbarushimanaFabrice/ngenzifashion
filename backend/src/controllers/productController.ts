import { Request, Response } from "express";
import { Products, Shop, Categories } from "../models";

// Create a new product
export const createProduct = async (req: Request, res: Response): Promise<void> => {
  try {
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
      category_id,
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
      category_id,
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

// Get all products
export const getAllProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const products = await Products.findAll({
      include: [
        { model: Shop, as: "shop" },
        { model: Categories, as: "category" } // Include category data
      ]
    });

    res.status(200).json({
      success: true,
      data: products
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// Get a single product by ID
export const getProductById = async (req: Request, res: Response): Promise<void> => {
  try {
    const productId = parseInt(req.params.id, 10);
    const product = await Products.findByPk(productId, {
      include: [
        { model: Shop, as: "shop" },
        { model: Categories, as: "category" }
      ]
    });

    if (!product) {
      res.status(404).json({
        success: false,
        message: "Product not found"
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: product
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// Update a product by ID
export const updateProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const productId = parseInt(req.params.id, 10);
    const [updated] = await Products.update(req.body, {
      where: { product_id: productId }
    });

    if (!updated) {
      res.status(404).json({
        success: false,
        message: "Product not found"
      });
      return;
    }

    const updatedProduct = await Products.findByPk(productId, {
      include: [
        { model: Shop, as: "shop" },
        { model: Categories, as: "category" }
      ]
    });

    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: updatedProduct
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// Delete a product by ID
export const deleteProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const productId = parseInt(req.params.id, 10);
    const deleted = await Products.destroy({
      where: { product_id: productId }
    });

    if (!deleted) {
      res.status(404).json({
        success: false,
        message: "Product not found" 
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Product deleted successfully"
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};
