import { DataTypes } from 'sequelize';
import sequelize from '../db.js'; 
export const Order = sequelize.define('Order', 
    { 
    id: { 
            type: DataTypes.INTEGER, 
            primaryKey: true, 
            autoIncrement: true 
        }, 
    name: DataTypes.STRING, 
    email: DataTypes.STRING, 
    quantity: DataTypes.INTEGER, 
    description: DataTypes.STRING, 
    id_product: DataTypes.STRING,
    contacts: DataTypes.STRING,
    createdAt: DataTypes.DATE, 
    updatedAt: DataTypes.DATE }, 
    { 
        tableName: 'orders', 
        timestamps: false 
    });