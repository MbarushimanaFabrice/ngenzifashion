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
