import { Request, Response } from "express";
import { Shop, User } from "../models";
// create shop
export const createShop = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      owner_id,
      shop_name,
      description,
      contact_email,
      contact_phone,
      address,
      city,
      state,
      country,
      postal_code,
      tax_id
    } = req.body; 
    const shop = await Shop.create({
      owner_id,
      shop_name,
      description,
      contact_email,
      contact_phone,
      address,
      city,
      state,
      country,
      postal_code,
      tax_id
    });
    res.status(201).json({
      success: true,
      data: Shop,
      message: "Shop created successfully"
    });
  } catch (error: any) {
    res.status(400).json({
      success: true,
      message: error.message
    });
  }
};

// get All shops
export const getShops = async (req: Request, res: Response): Promise<void> => {
  try {
    const shop = await Shop.findAll({
      include: [
        {
          model: User,
          as: "users", 
          attributes: ["user_id","username","email","createdAt"]
        }
      ]
    });
    res.status(201).json({
      success: true,
      data: shop
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// get shop by id

export const getShopById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { shop_id } = req.params;
    const shop = await Shop.findByPk(shop_id, {
      include: [
        {
          model: User,
          as:"users",
          attributes: ["user_id","username","email","createdAt"]
        }
      ]
    });
    if (!shop) {
      res.status(404).json({
        success: false,
        message: "Shop not found"
      });
     
    }
     res.status(201).json({
        success: true,
        data: shop
      });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// Update shop

export const updateShop = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { shop_id } = req.params;
    const {
      shop_name,
      description,
      contact_email,
      contact_phone,
      address,
      city,
      state,
      country,
      postal_code
    } = req.body;
    const [updatedRowsCount] =await Shop.update(
      {
        shop_name,
        description,
        contact_email,
        contact_phone,
        address,
        city,
        state,
        country,
        postal_code
      },
      { where: {shop_id} }
    );
    if (updatedRowsCount === 0) {
      res.status(404).json({
        success: false,
        message: "Shop not found"
      });
      return;
    }
    const updatedShop=await Shop.findByPk(shop_id);
    res.status(201).json({
      success: true,
      updated_at: updatedShop,
      message: "Shop updated"
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

export default Shop;

// delete shop