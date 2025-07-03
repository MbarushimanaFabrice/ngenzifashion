import { DataTypes } from "sequelize";
import sequelize from "../config/database";

const Product_variants = sequelize.define(
  "Product_variants",
  {
    variant_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        key: "product_id",
        model: "products"
      }  
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    value: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    price_adjustment: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0.0
    },
    sku: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  },
  {
    timestamps: true,
    tableName: "product_variants"
  }
);

export default Product_variants;

 