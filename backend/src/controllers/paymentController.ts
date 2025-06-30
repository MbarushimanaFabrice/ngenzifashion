import { Request,Response } from "express";
import { Payments } from "../models";


// create a new payment
export const createPayment = async (req: Request, res: Response): Promise<void> =>
{
  try {
    const {
      order_id,
      amount,
      payment_method,
      transaction_id,
      payment_status,
      payment_date
    } = req.body;

    const newPayment = await Payments.create({
      order_id,
      amount,
      payment_method,
      transaction_id,
      payment_status,
      payment_date
    });

    res.status(201).json({
      success: true,
      message: "Payment created successfully",
      data: newPayment
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
}

// get all payments
export const getAllPayments = async (req: Request, res: Response): Promise<void> => {
  try {
    const payments = await Payments.findAll({
      order: [['payment_date', 'DESC']]
    });

    res.status(200).json({
      success: true,
      data: payments
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
}


// get a single payment by id
export const getPaymentById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const payment = await Payments.findByPk(id);

    if (!payment) {
      res.status(404).json({
        success: false,
        message: "Payment not found"
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: payment
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
}
// update a payment
export const updatePayment = async (req: Request, res: Response): Promise<void> =>
{
  try {
    const { id } = req.params;
    const {
      order_id,
      amount,
      payment_method,
      transaction_id,
      payment_status,
      payment_date
    } = req.body;

    const payment = await Payments.findByPk(id);

    if (!payment) {
      res.status(404).json({
        success: false,
        message: "Payment not found"
      });
      return;
    }

    await payment.update({
      order_id,
      amount,
      payment_method,
      transaction_id,
      payment_status,
      payment_date
    });

    res.status(200).json({
      success: true,
      message: "Payment updated successfully",
      data: payment
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
}


// delete a payment
export const deletePayment = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const payment = await Payments.findByPk(id);

    if (!payment) {
      res.status(404).json({
        success: false,
        message: "Payment not found"
      });
      return;
    }

    await payment.destroy();

    res.status(200).json({
      success: true,
      message: "Payment deleted successfully"
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
}























// const Payments = sequelize.define(
//   "Payments",
//   {
//     payment_id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       primaryKey: true
//     },
//     order_id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         key: "order_id",
//         model: "orders"
//       }
//     },
//     amount: {
//       type: DataTypes.DECIMAL(10, 2),
//       allowNull: false
//     },
//     payment_method: {
//       type: DataTypes.STRING(50),
//       allowNull: false
//     },
//     transaction_id: {
//       type: DataTypes.STRING(100),
//       allowNull: true
//     },
//     payment_status: {
//       type: DataTypes.ENUM('pending', 'completed', 'failed', 'refunded'),
//       allowNull: false
//     },
//     payment_date: {
//       type: DataTypes.DATE,
//       allowNull: true
//     }
//   },
//   {
//     timestamps: true,
//     tableName: "payments"
//   }
// );
