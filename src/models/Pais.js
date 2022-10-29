import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

export const Pais=sequelize.define('Pais ',
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
        copas:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        rankingfifa:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        region:{
            type:DataTypes.STRING(40),
            allowNull:false,
        },

    },
    {
        tableName:"Pais"
    }
);
