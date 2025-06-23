import { Request, Response } from 'express';
import { Product_images } from '../models';
import { Op } from 'sequelize';


// create a new product image
export const createProductImage = async (req: Request, res: Response): Promise<void> => {
  try{
    const { product_id, image_url, alt_text, is_primary, display_order } = req.body;

    const newImage = await Product_images.create({
      product_id,
      image_url,
      alt_text,
      is_primary: is_primary || false,
      display_order: display_order || 0
    });

    res.status(201).json({
      success: true,
      message: 'Product image created successfully',
      data: newImage
    });
  }
  catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message
    });

  }
};
// get all product images
export const getAllProductImages = async (req: Request, res: Response): Promise<void> => {
  try{
    const productImages = await Product_images.findAll({
      order: [['display_order', 'ASC']]
    });

    res.status(200).json({
      success: true,
      data: productImages
    });
  }
  catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};
  
// get product images by product_id
export const getProductImagesByProductId = async (req: Request, res: Response): Promise<void> => {
  try{
    const { product_id } = req.params;

    const productImages = await Product_images.findAll({
      where: {
        product_id: {
          [Op.eq]: product_id
        }
      },
      order: [['display_order', 'ASC']]
    });

    if (productImages.length === 0) {
      res.status(404).json({
        success: false,
        message: 'No images found for this product'
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: productImages
    });
  }
  catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
}

  // Update a product image by image_id
export const updateProductImage = async (req: Request, res: Response): Promise<void> => {
  try{
    const { image_id } = req.params;
    const { product_id, image_url, alt_text, is_primary, display_order } = req.body;

    const [updatedRowsCount, updatedRows] = await Product_images.update(
      {
        product_id,
        image_url,
        alt_text,
        is_primary: is_primary || false,
        display_order: display_order || 0
      },
      {
        where: { image_id },
        returning: true
      }
    );

    if (updatedRowsCount === 0) {
      res.status(404).json({
        success: false,
        message: 'Image not found'
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: 'Product image updated successfully',
      data: updatedRows[0]
    });

  }
  catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }

}
// Delete a product image by image_id

export const deleteProductImage = async (req: Request, res: Response): Promise<void> => {
  try{
    const { image_id } = req.params;

    const deletedRowsCount = await Product_images.destroy({
      where: { image_id }
    });

    if (deletedRowsCount === 0) {
      res.status(404).json({
        success: false,
        message: 'Image not found'
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: 'Product image deleted successfully'
    });
  }
  catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
}
  
  
  
  
  
   