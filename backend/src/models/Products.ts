import { DataTypes } from "sequelize";
import sequelize from "../config/database";

const Products= sequelize.define('Products', {
  product_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  shop_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'shops',  
      key: 'shop_id'
    }
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  price: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: false
  },
  compare_at_price: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: true
  },
  cost_per_item: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: true
  },
  sku: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  barcode: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false
  },
  weight: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: true
  },
  weight_unit: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  is_published: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  is_featured: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
},{
  timestamps: true,
  tableName: 'products',
})

export default Products;
 