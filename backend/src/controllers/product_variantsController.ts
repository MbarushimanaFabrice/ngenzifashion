import { Request,Response } from "express";
import { Product_variants } from "../models";


// Create Product Variant
export const createProductVariant = async (req: Request, res: Response): Promise<void> => {
  try {
    const { product_id, name, value, price_adjustment, sku, quantity } = req.body;

    const newVariant = await Product_variants.create({
      product_id,
      name,
      value,
      price_adjustment,
      sku,
      quantity
    });

    res.status(201).json({
      success: true,
      message: "Product variant created successfully",
      data: newVariant
    });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get All Product Variants
export const getAllProductVariants = async (_req: Request, res: Response): Promise<void> => {
  try {
    const variants = await Product_variants.findAll({ order: [['createdAt', 'DESC']] });
    res.status(200).json({ success: true, data: variants });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get Product Variants by Product ID
export const getProductVariantsByProductId = async (req: Request, res: Response): Promise<void> => {
  try {
    const { product_id } = req.params;

    const variants = await Product_variants.findAll({
      where: { product_id },
      order: [['createdAt', 'DESC']]
    });

    if (variants.length === 0) {
      res.status(404).json({ success: false, message: "No variants found for this product" });
      return;
    }

    res.status(200).json({ success: true, data: variants });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};
// Update Product Variant

export const updateProductVariant = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { product_id, name, value, price_adjustment, sku, quantity } = req.body;

    const variant = await Product_variants.findByPk(id);
    if (!variant) {
      res.status(404).json({ success: false, message: "Variant not found" });
      return;
    }

    await variant.update({
      product_id,
      name,
      value,
      price_adjustment,
      sku,
      quantity
    });

   
    res.status(200).json({
      success: true,
      message: "Product variant updated successfully",
      data: variant
    });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};





// Delete Product Variant
export const deleteProductVariant = async (req: Request, res: Response): Promise<void>=>{
  try {
    const { id } = req.params;

    const variant = await Product_variants.findByPk(id);
    if (!variant) {
      res.status(404).json({ success: false, message: "Variant not found" });
      return;
    }

    await variant.destroy();

    res.status(200).json({
      success: true,
      message: "Product variant deleted successfully"
    });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
}





 