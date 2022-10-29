import { DataTypes} from "sequelize";
import { sequelize } from "../db.js";


export const Equipo=sequelize.define('Equipos',
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
       
    },
    
        {
            tableName:"Equipo"
        }
    
);





