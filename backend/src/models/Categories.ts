
import { DataTypes } from "sequelize";
import sequelize from "../config/database";
const Categories= sequelize.define('Categories', {
  category_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  parent_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'categories',  
      key: 'category_id'
    }
  },
  image_url: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
},{
  timestamps: true,
  tableName: 'categories'
})

export default Categories;


// CREATE TABLE categories (
//     category_id INT AUTO_INCREMENT PRIMARY KEY,
//     name VARCHAR(50) NOT NULL,
//     description TEXT,
//     parent_id INT,
//     image_url VARCHAR(255),
//     is_active BOOLEAN DEFAULT TRUE,
//     FOREIGN KEY (parent_id) REFERENCES categories(category_id)
// );

