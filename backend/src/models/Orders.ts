import { DataTypes } from "sequelize";
import sequelize from "../config/database";

const Orders = sequelize.define(
  "Orders",
  {
    order_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    order_number: {
      type: DataTypes.STRING(20),
      unique: true,
      allowNull: false
    },

    // Updated: Replace customer_id with user_id
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "user_id"
      }
    },

    shop_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "shops",
        key: "shop_id"
      }
    },

    order_status: {
      type: DataTypes.ENUM(
        "pending",
        "processing",
        "shipped",
        "delivered",
        "cancelled",
        "refunded"
      ),
      defaultValue: "pending"
    },

    subtotal: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },

    tax_amount: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0.0
    },

    shipping_amount: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0.0
    },

    discount_amount: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0.0
    },

    total_amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },

    payment_method: {
      type: DataTypes.STRING(50),
      allowNull: true
    },

    payment_status: {
      type: DataTypes.ENUM("pending", "paid", "failed", "refunded"),
      defaultValue: "pending"
    },

    shipping_address_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "customer_addresses",
        key: "address_id"
      }
    },

    billing_address_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "customer_addresses",
        key: "address_id"
      }
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  },
  {
    timestamps: true,
    tableName: "orders"
  }
);

export default Orders;
