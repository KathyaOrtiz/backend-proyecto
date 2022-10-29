import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";


export const Resultado=sequelize.define('Resultado',
    {
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            autoIncrement:true,
            primaryKey:true,
        },
        goles_equipo1:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        goles_equipo2:{
            type:DataTypes.INTEGER,
            allowNull:false
        },

    },
    {
        tableName:'Resultado'
    }
)

