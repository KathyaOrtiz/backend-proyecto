import { Equipo } from "../models/Equipo.js";
import { Partido } from "../models/Partidos.js";
import { Resultado } from "../models/Resultado.js";

export const getResultados=async(req,res)=>{
    try {
        const resultados=await Resultado.findAll({
            include:[{
                model:Partido,
                attributes:['id'],
                include:[{
                    model:Equipo,
                    as:'equipo1',
                    attributes:['nombre']
                },{
                    model:Equipo,
                    as:'equipo2',
                    attributes:['nombre']
                }
                ]
            },]

        })
        res.json(resultados)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
};

export const getResultado=async(req,res)=>{
    try {
        const {id}=req.params;
        const resultado=await Resultado.findOne({
            where:{
                id
            },
            include:[{
                model:Partido,
                attributes:['id'],
                include:[{
                    model:Equipo,
                    as:'equipo1',
                    attributes:['nombre']
                },{
                    model:Equipo,
                    as:'equipo2',
                    attributes:['nombre']
                }
                ]
            },]
        })
        res.json(resultado)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
};

export const createResultado=async(req,res)=>{
    try {
        const {goles_equipo1,goles_equipo2,id_partido}=req.body;
        const nuevoResultado=await Resultado.create({
            goles_equipo1,
            goles_equipo2,
            id_partido
        });
        res.json(nuevoResultado);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
};

export const updateResultado=async(req,res)=>{
    try {
        const {id}=req.params;
        const {goles_equipo1,goles_equipo2,id_partido}=req.body;
        const resultado=await Resultado.findByPk((id));
        resultado.goles_equipo1=goles_equipo1;
        resultado.goles_equipo2=goles_equipo2;
        resultado.id_partido=id_partido;
        await resultado.save();
        res.json(resultado);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
};

export const deleteResultado=async(req,res)=>{
    try {
        const {id}=req.params;
        await Resultado.destroy({
            where:{
                id,
            },
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
};