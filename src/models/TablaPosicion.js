import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";


export const TablaPosicion=sequelize.define('TablaPosicion',
    {
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            autoIncrement:true,
            primaryKey:true,
        },
        p_jugados:{
            type:DataTypes.INTEGER,
            allowNull:true,
        },
        p_ganados:{
            type:DataTypes.INTEGER,
            allowNull:true,
        },
        p_empatados:{
            type:DataTypes.INTEGER,
            allowNull:true,
        },
        p_perdidos:{
            type:DataTypes.INTEGER,
            allowNull:true,
        },
        goles_favor:{
            type:DataTypes.INTEGER,
            allowNull:true,
        },
        goles_contra:{
            type:DataTypes.INTEGER,
            allowNull:true,
        },
        direferencia_p:{
            type:DataTypes.INTEGER,
            allowNull:true,
        },
        puntos:{
            type:DataTypes.INTEGER,
            allowNull:true,
        },     
    },
    {
        tableName:'TablaPosicion'
    }
);

