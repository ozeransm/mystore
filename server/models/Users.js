import { DataTypes } from 'sequelize';
import sequelize from '../db.js'; 
export const User = sequelize.define('User', 
    { 
    id: { 
            type: DataTypes.INTEGER, 
            primaryKey: true, 
            autoIncrement: true 
        }, 
    name: DataTypes.STRING, 
    email: {
            type: DataTypes.STRING, 
            unique: true 
           }, 
    password: DataTypes.STRING, description: DataTypes.STRING, 
    role: {
            type: DataTypes.STRING, 
            defaultValue: 'user' 
          },
    createdAt: DataTypes.TEXT, 
    updatedAt: DataTypes.TEXT }, 
    { 
        tableName: 'users', 
        timestamps: false 
    });