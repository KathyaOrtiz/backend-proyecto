import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

export const Grupo=sequelize.define('Grupo',
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
       
        jornada:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },

    },
    {
        tableName:"Grupo"
    }
);





