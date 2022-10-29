import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";



export const Partido=sequelize.define('Partido',
    {
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            autoIncrement:true,
            primaryKey:true,
        },
        fecha:{
            type:DataTypes.DATE,
            allowNull:false,
        },
        hora:{
            type:DataTypes.TIME,
            allowNull:true,
            
        }
    },
    {
        tableName:'Partido'
    },
    
)