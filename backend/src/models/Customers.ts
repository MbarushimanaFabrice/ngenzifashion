import { DataTypes } from "sequelize";
import sequelize from "../config/database";


const Customers = sequelize.define(
  "Customers",
  {
    customer_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        key: "user_id",
        model: "users"
      }
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    first_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  },
  {
    timestamps: true,
    tableName: "customers"
  }
);

export default Customers;



// CREATE TABLE customers (
//     customer_id INT AUTO_INCREMENT PRIMARY KEY,
//     user_id INT,
//     email VARCHAR(100),
//     first_name VARCHAR(50),
//     last_name VARCHAR(50),
//     phone VARCHAR(20),
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//     FOREIGN KEY (user_id) REFERENCES users(user_id)
// );