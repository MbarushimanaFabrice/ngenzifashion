import { DataTypes } from "sequelize";
import sequelize from "../config/database";

const Payments = sequelize.define(
  "Payments",
  {
    payment_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        key: "order_id",
        model: "orders"
      }
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    payment_method: {
      type: DataTypes.STRING(50), 
      allowNull: false
    },
    transaction_id: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    payment_status: {
      type: DataTypes.ENUM('pending', 'completed', 'failed', 'refunded'),
      allowNull: false
    },
    payment_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  },
  {
    timestamps: true,
    tableName: "payments"
  }
);

export default Payments;

 