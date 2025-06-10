import { DataTypes }  from "sequelize";
import sequelize from "../config/database";

const User=sequelize.define('User',{
    user_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        unique: true,
        allowNull: false
    }, 
    password_hash: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    first_name: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    last_name: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    phone: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    user_type: {
        type: DataTypes.ENUM('admin', 'shop_owner', 'customer'),
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
     },
   
    is_active:{
      type :DataTypes.BOOLEAN,
      defaultValue:true
    }
},{
  tableName: 'users',
  timestamps: true,
})

export default User;









 