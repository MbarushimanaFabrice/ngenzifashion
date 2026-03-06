import { Request, Response } from 'express';
import { Discounts } from '../models';
import { Op } from 'sequelize';

// Create Discount
export const createDiscount = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      shop_id,
      code,   
      discount_type,
      discount_value,
      min_order_amount,
      max_uses,
      start_date,
      end_date
    } = req.body;   

    const newDiscount = await Discounts.create({
      shop_id,
      code,
      discount_type,
      discount_value,
      min_order_amount,
      max_uses,
      start_date,
      end_date
    });

    res.status(201).json({
      success: true,
      message: 'Discount created successfully',
      data: newDiscount
    });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get All Discounts
export const getAllDiscounts = async (_req: Request, res: Response): Promise<void> => {
  try {
    const discounts = await Discounts.findAll({ order: [['createdAt', 'DESC']] });
    res.status(200).json({ success: true, data: discounts });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get Active Discounts for a Shop
export const getActiveDiscounts = async (req: Request, res: Response): Promise<void> => {
  try {
    const { shop_id } = req.params;

    const discounts = await Discounts.findAll({
      where: {
        shop_id,
        is_active: true,
        start_date: { [Op.lte]: new Date() },
        end_date: { [Op.gte]: new Date() }
      },
      order: [['start_date', 'ASC']]
    });

    res.status(200).json({ success: true, data: discounts });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get One Discount by ID
export const getDiscountById = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = parseInt(req.params.id);
    const discount = await Discounts.findByPk(id);

    if (!discount) {
      res.status(404).json({ success: false, message: 'Discount not found' });
      return;
    }

    res.status(200).json({ success: true, data: discount });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Update Discount
export const updateDiscount = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = parseInt(req.params.id);
    const [updated] = await Discounts.update(req.body, { where: { discount_id: id } });

    if (!updated) {
      res.status(404).json({ success: false, message: 'Discount not found' });
      return;
    }

    const updatedDiscount = await Discounts.findByPk(id);
    res.status(200).json({
      success: true,
      message: 'Discount updated successfully',
      data: updatedDiscount
    });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Delete Discount
export const deleteDiscount = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = parseInt(req.params.id);
    const deleted = await Discounts.destroy({ where: { discount_id: id } });

    if (!deleted) {
      res.status(404).json({ success: false, message: 'Discount not found' });
      return;
    }

    res.status(200).json({ success: true, message: 'Discount deleted successfully' });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};
