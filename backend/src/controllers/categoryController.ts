import {Request,Response } from 'express';
import { Categories } from '../models';

// create a new category
export const createCategory = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, description, parent_id, image_url } = req.body;

    const newCategory = await Categories.create({
      name,
      description,
      parent_id,
      image_url
    });

    res.status(201).json({
      success: true,
      message: "Category created successfully",
      data: newCategory
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};
// get all categories
export const getAllCategories = async (req: Request, res: Response): Promise<void> => {
  try {
    const categories = await Categories.findAll({
      where: { is_active: true },
      order: [['name', 'ASC']]
    });

    res.status(200).json({
      success: true,
      data: categories
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// get a single category by id
export const getCategoryById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const category = await Categories.findByPk(id);

    if (!category) {
      res.status(404).json({
        success: false,
        message: "Category not found"
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: category
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};
// update a category
export const updateCategory = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { name, description, parent_id, image_url, is_active } = req.body;

    const category = await Categories.findByPk(id);

    if (!category) {
      res.status(404).json({
        success: false,
        message: "Category not found"
      });
      return;
    }

    await category.update({
      name,
      description,
      parent_id,
      image_url,
      is_active
    });

    res.status(200).json({
      success: true,
      message: "Category updated successfully",
      data: category
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};  
// delete a category
export const deleteCategory = async (req: Request, res: Response): Promise<void> =>{
  try {
    const { id } = req.params;
    const category = await Categories.findByPk(id);

    if (!category) {
      res.status(404).json({
        success: false,
        message: "Category not found"
      });
      return;
    }

    await category.destroy();

    res.status(200).json({
      success: true,
      message: "Category deleted successfully"
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
}