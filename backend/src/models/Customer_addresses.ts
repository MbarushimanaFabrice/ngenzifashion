import { DataTypes } from "sequelize";
import sequelize from "../config/database";

const Customer_addresses = sequelize.define("Customer_addresses", {
  address_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  // ✅ Updated: Link to users table (customers are users)
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "users",
      key: "user_id",
    },
  },

  address_type: {
    type: DataTypes.ENUM("shipping", "billing"),
    allowNull: false,
  },
  first_name: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  last_name: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  address1: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  address2: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  city: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  state: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  country: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  postal_code: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  is_default: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
}, {
  timestamps: true,
  tableName: "customer_addresses",
});

export default Customer_addresses;
