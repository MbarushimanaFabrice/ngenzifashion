import { DataTypes} from "sequelize";
import sequelize from "../config/database";

const Product_images = sequelize.define('Product_images', {
  image_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'products',  
      key: 'product_id'
    }
  },
  image_url: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  alt_text: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  is_primary: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  display_order: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
},{
  timestamps: true,
  tableName: 'product_images'
})

export default Product_images;

// -- CREATE TABLE product_images (
// --     image_id INT AUTO_INCREMENT PRIMARY KEY,
// --     product_id INT NOT NULL,
// --     image_url VARCHAR(255) NOT NULL,
// --     alt_text VARCHAR(100),
// --     is_primary BOOLEAN DEFAULT FALSE,
// --     display_order INT DEFAULT 0,
// --     FOREIGN KEY (product_id) REFERENCES products(product_id)
// -- );