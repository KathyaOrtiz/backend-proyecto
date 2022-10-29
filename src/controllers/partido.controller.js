import { Equipo } from "../models/Equipo.js";
import { Estadio } from "../models/Estadio.js";
import { Fase } from "../models/Fase.js";
import { Partido } from "../models/Partidos.js";
import { sequelize } from "../db.js";


export const getPartidos=async(req,res)=>{
    try {
        const partidos=await Partido.findAll({
            attributes:[
                'id',
                [sequelize.fn('date_format', sequelize.col('fecha'), '%d-%m-%Y'), 'fecha'],
                'hora',
                'id_equipo1',
                'id_equipo2'
            ],
            include:[{
                model:Equipo,
                as:'equipo1',
                attributes:['nombre'],

            },
            {
                model:Equipo,
                as:'equipo2',
                attributes:['nombre'],

            },
            {
                model:Estadio,
                attributes:['nombre','ubicacion'],

            },
            {
                model:Fase,
                attributes:['nombre']
            },
        ],
       
        });
        res.json(partidos)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
};

export const getPartido=async(req,res)=>{
    try {
    const {id}=req.params;
    const partido=await Partido.findOne({
        where:{
            id
        },
        attributes:[
            'id',
            [sequelize.fn('date_format', sequelize.col('fecha'), '%d-%m-%Y'), 'fecha'],
            'hora',
            'id_equipo1',
            'id_equipo2'
           
        ],
        include:[{
            model:Equipo,
            as:'equipo1',
            attributes:['nombre'],

        },
        {
            model:Equipo,
            as:'equipo2',
            attributes:['nombre'],

        },
        {
            model:Estadio,
            attributes:['nombre','ubicacion'],

        },
        {
            model:Fase,
            attributes:['nombre']
        },
    ],
   
    });
    if (!partido) {
        return res.status(404).json('No existe este partido')
    }
    res.json(partido);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const createPartido=async(req,res)=>{
   try {
    const {id_equipo1,id_equipo2,fecha,hora,id_estadio,id_fase}=req.body;
    const nuevoPartido=await Partido.create({
        id_equipo1,
        id_equipo2,
        fecha,
        hora,
        id_estadio,
        id_fase
    });
    res.json(nuevoPartido);
   } catch (error) {
    return res.status(500).json({message: error.message})
   }
};

export const updatePartido=async(req,res)=>{
    try {
        const {id}=req.params;
        const {id_equipo1,id_equipo2,fecha,hora,id_estadio,id_fase}=req.body;
        const partido=await Partido.findByPk((id));
        partido.id_equipo1=id_equipo1;
        partido.id_equipo2=id_equipo2;
        partido.fecha=fecha;
        partido.hora=hora;
        partido.id_estadio=id_estadio;
        partido.id_fase=id_fase;
        await partido.save();
        res.json(partido)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
};

export const deletePartido=async(req,res)=>{
    try {
        const {id}=req.params;
        await Partido.destroy({
            where:{
                id,
            },
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
};