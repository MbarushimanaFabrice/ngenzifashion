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

// CREATE TABLE product_variants (
//     variant_id INT AUTO_INCREMENT PRIMARY KEY,
//     product_id INT NOT NULL,
//     name VARCHAR(50) NOT NULL,
//     value VARCHAR(50) NOT NULL,
//     price_adjustment DECIMAL(10,2) DEFAULT 0.00,
//     sku VARCHAR(50),
//     quantity INT NOT NULL DEFAULT 0,
//     FOREIGN KEY (product_id) REFERENCES products(product_id)
// );
