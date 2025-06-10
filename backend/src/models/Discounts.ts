import { DataTypes } from "sequelize";
import sequelize from "../config/database";


const Discounts = sequelize.define(
  "Discounts",{
    discount_id: {
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
    code: {
      type: DataTypes.STRING(50),
      unique: true,
      allowNull: false
    },
    discount_type: {
      type: DataTypes.ENUM('percentage', 'fixed_amount'),
      allowNull: false
    },
    discount_value: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    min_order_amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true
    },
    max_uses: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    uses_count: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    } 
  },{
tableName: "discounts",
  timestamps: true,
  }
)

export default Discounts;
 