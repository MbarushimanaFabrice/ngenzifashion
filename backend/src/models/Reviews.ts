import { DataTypes } from "sequelize"; 
import sequelize from "../config/database";

const Reviews = sequelize.define("Reviews", {
  review_id: {
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

  // ✅ Changed from customer_id to user_id
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'user_id'
    }
  },

  rating: {
    type: DataTypes.TINYINT,
    allowNull: false,
    validate: {
      min: 1,  
      max: 5
    }
  },

  title: {
    type: DataTypes.STRING(100),
    allowNull: true
  },

  comment: {
    type: DataTypes.TEXT,
    allowNull: true
  },

  is_approved: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }

}, {
  tableName: "reviews",
  timestamps: true
});

export default Reviews;
