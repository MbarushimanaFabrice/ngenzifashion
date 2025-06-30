import { Request,Response } from "express";
import {Customer_addresses} from "../models";
// create a new customer address

export const createCustomerAddress = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      user_id,
      address_type,
      first_name,
      last_name,
      address1,
      address2,
      city,
      state,
      country,
      postal_code,
      phone,
      is_default
    } = req.body;

    const newAddress = await Customer_addresses.create({
      user_id,
      address_type,
      first_name,
      last_name,
      address1,
      address2,
      city,
      state,
      country,
      postal_code,
      phone,
      is_default
    });

    res.status(201).json({
      success: true,
      message: "Customer address created successfully",
      data: newAddress
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// get all customer addresses
export const getAllCustomerAddresses = async (req: Request, res: Response): Promise<void> => {
  try {
    const addresses = await Customer_addresses.findAll({
      order: [['createdAt', 'DESC']]
    });

    res.status(200).json({
      success: true,
      data: addresses
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// get a single customer address by id
export const getCustomerAddressById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const address = await Customer_addresses.findByPk(id);

    if (!address) {
      res.status(404).json({
        success: false,
        message: "Customer address not found"
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: address
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// update a customer address by id
export const updateCustomerAddress = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const {
      user_id,
      address_type,
      first_name,
      last_name,
      address1,
      address2,
      city,
      state,
      country,
      postal_code,
      phone,
      is_default
    } = req.body;

    const address = await Customer_addresses.findByPk(id);

    if (!address) {
      res.status(404).json({
        success: false,
        message: "Customer address not found"
      });
      return;
    }

    await address.update({
      user_id,
      address_type,
      first_name,
      last_name,
      address1,
      address2,
      city,
      state,
      country,
      postal_code,
      phone,
      is_default
    });

    res.status(200).json({
      success: true,
      message: "Customer address updated successfully",
      data: address
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
}

// delete a customer address by id
export const deleteCustomerAddress = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const address = await Customer_addresses.findByPk(id);

    if (!address) {
      res.status(404).json({
        success: false,
        message: "Customer address not found"
      });
      return;
    }

    await address.destroy();

    res.status(200).json({
      success: true,
      message: "Customer address deleted successfully"
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
}




















//  address_id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//   },

//   // ✅ Updated: Link to users table (customers are users)
//   user_id: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     references: {
//       model: "users",
//       key: "user_id",
//     },
//   },

//   address_type: {
//     type: DataTypes.ENUM("shipping", "billing"),
//     allowNull: false,
//   },
//   first_name: {
//     type: DataTypes.STRING(50),
//     allowNull: true,
//   },
//   last_name: {
//     type: DataTypes.STRING(50),
//     allowNull: true,
//   },
//   address1: {
//     type: DataTypes.STRING(100),
//     allowNull: false,
//   },
//   address2: {
//     type: DataTypes.STRING(100),
//     allowNull: true,
//   },
//   city: {
//     type: DataTypes.STRING(50),
//     allowNull: false,
//   },
//   state: {
//     type: DataTypes.STRING(50),
//     allowNull: false,
//   },
//   country: {
//     type: DataTypes.STRING(50),
//     allowNull: false,
//   },
//   postal_code: {
//     type: DataTypes.STRING(20),
//     allowNull: false,
//   },
//   phone: {
//     type: DataTypes.STRING(20),
//     allowNull: true,
//   },
//   is_default: {
//     type: DataTypes.BOOLEAN,
//     defaultValue: false,
//   },
// }, {
//   timestamps: true,
//   tableName: "customer_addresses",
// });
