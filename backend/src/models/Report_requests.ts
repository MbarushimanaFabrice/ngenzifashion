import { DataTypes } from "sequelize";  
import sequelize from "../config/database";

const Report_requests = sequelize.define(
  "Report_requests",
  {
    report_id: {
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
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'user_id'
      }
    },
    report_type: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    parameters: {
      type: DataTypes.JSON,
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM('pending', 'processing', 'completed', 'failed'),
      defaultValue: 'pending'
    },
    file_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    completed_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  },
  {
    tableName: "report_requests",
    timestamps: true
  }
);
export default Report_requests;
 