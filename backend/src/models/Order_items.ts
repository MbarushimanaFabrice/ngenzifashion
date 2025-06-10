import { DataTypes } from "sequelize";
import sequelize from "../config/database";

const Order_items = sequelize.define(
  "Order_items",{
    order_item_id: {
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
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        key: "product_id",
        model: "products"
      }
    },
    variant_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        key: "variant_id",
        model: "product_variants"
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    discount_amount: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0.00
    },
    total_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    }

  },{
timestamps: true,
  tableName: "order_items"
  }
)

export default Order_items;