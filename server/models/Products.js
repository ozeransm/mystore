import { DataTypes } from 'sequelize';
import sequelize from '../db.js'; 
export const Product = sequelize.define('Product', 
    { 
    id: { 
            type: DataTypes.INTEGER, 
            primaryKey: true, 
            autoIncrement: true 
        }, 
    name: DataTypes.STRING, 
    price: DataTypes.STRING, 
    quantity: DataTypes.STRING, 
    description: DataTypes.STRING, 
    }, 
    { 
        tableName: 'products', 
        timestamps: true 
    });