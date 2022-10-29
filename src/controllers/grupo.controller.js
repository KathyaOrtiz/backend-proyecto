import { Equipo } from '../models/Equipo.js';
import {Grupo} from '../models/Grupo.js'
export const getGrupos=async(req,res)=>{
    try {
        const grupos=await Grupo.findAll({
            include:{
                model:Equipo,
                attributes:['nombre']
            }
        });
        res.json(grupos)
    } catch (error) {
        
    }
};

export const getGrupo=async(req,res)=>{
    try {
        const {id}=req.params;
        const grupo=await Grupo.findOne({
            where:{
                id
            },
            include:{
                model:Equipo,
                attributes:['nombre']
            }
        })
        if(!grupo){
            return res.status(404).json({message: 'No existe'})
        }
        res.json(grupo)
    
    } catch (error) {
        return res.status(500).json({message: error.message});
    }

};

export const createGrupo=async(req,res)=>{
    try {
        const {nombre,jornada,id_equipo}=req.body;
        const nuevoGrupo=await Grupo.create({
            nombre,
            jornada,
            id_equipo
        });
        res.json(nuevoGrupo);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const updateGrupo=async(req,res)=>{
    try {
        const {id}=req.params;
        const {nombre,jornada,id_equipo}=req.body;
        const grupo=await Grupo.findByPk((id));
        grupo.nombre=nombre;
        grupo.jornada=jornada;
        grupo.id_equipo=id_equipo;
        await grupo.save();
        res.json(grupo);
    } catch (error) {
        return res.status(500).json({message: error.message}) 
    }
};

export const deleteGrupo=async(req,res)=>{
    try {
        const {id}=req.params;
        await Grupo.destroy({
            where:{
                id,
            },
        });
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
};

