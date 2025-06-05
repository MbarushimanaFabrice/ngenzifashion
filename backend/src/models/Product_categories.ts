import { DataTypes } from "sequelize";
import sequelize from "../config/database";

const Product_categories = sequelize.define('Product_categories', {
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'products',  
      key: 'product_id'
    },
    primaryKey: true
  },
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'categories',  
      key: 'category_id'
    },
    primaryKey: true
  }
}, {
  timestamps: true,
  tableName: 'product_categories'
})
export default Product_categories;


// CREATE TABLE product_categories (
//     product_id INT NOT NULL,
//     category_id INT NOT NULL,
//     PRIMARY KEY (product_id, category_id),
//     FOREIGN KEY (product_id) REFERENCES products(product_id),
//     FOREIGN KEY (category_id) REFERENCES categories(category_id)
// );