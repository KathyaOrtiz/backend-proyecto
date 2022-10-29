import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";


export const Fase=sequelize.define('Fase',
    {
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            autoIncrement:true,
            primaryKey:true,
        },
        nombre:{
            type:DataTypes.STRING(60),
            allowNull:false,
            
        },
        
    },
    {
        tableName:"Fase"
    },
);


