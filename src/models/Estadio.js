import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";


export const Estadio=sequelize.define('Estadio',
    {
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            autoIncrement:true,
            primaryKey:true,
        },
        nombre:{
            type:DataTypes.STRING(40),
            allowNull:false,
            
        },
        ubicacion:{
            type:DataTypes.STRING(60),
            allowNull:false,
        },
        capacidad:{
            type:DataTypes.INTEGER,
            allowNull:false,
        }
    },
    {
        tableName:'Estadio'
    }
);

