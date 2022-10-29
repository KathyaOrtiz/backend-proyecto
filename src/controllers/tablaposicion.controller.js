import { Equipo } from "../models/Equipo.js";
import { TablaPosicion } from "../models/TablaPosicion.js";

export const getTablaposiciones=async (req,res)=>{
    try {
        const tablaposiciones=await TablaPosicion.findAll({
            include:{
                model:Equipo,
                as:'equipo',
                attributes:['nombre'],
            },
        });
        res.json(tablaposiciones)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
};

export const getTablaposicion=async (req,res)=>{
    try {
        const {id}=req.params;
        const tablaposiciones=await TablaPosicion.findOne({
            where:{
                id,
            },
        });
        if (!tablaposiciones) {
            return res.status(404).json('No existe') 
        }
        res.json(tablaposiciones);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
};

export const createTablaposicion=async (req,res)=>{
    try {
        const {id_equipo,p_jugados,p_ganados,p_empatados,p_perdidos,goles_favor,goles_contra,diferencia_p,puntos}=req.body;

        const nuevatablaposicion= await TablaPosicion.create({
                id_equipo,
                p_jugados,
                p_ganados,
                p_empatados,
                p_perdidos,
                goles_favor,
                goles_contra,
                diferencia_p,
                puntos
            });
            res.json(nuevatablaposicion);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
    }

export const updateTablaposicion=async (req,res)=>{
    try {
        const {id}=req.params;
        const {id_equipo,p_jugados,p_ganados,p_empatados,p_perdidos,id_goles_favor,id_goles_contra,diferencia_g,puntos}=req.body;
        const tablaposiciones=await TablaPosicion.findByPk((id));
        tablaposiciones.id_equipo=id_equipo;
        tablaposiciones.p_jugados=p_jugados;
        tablaposiciones.p_ganados=p_ganados;
        tablaposiciones.p_empatados=p_empatados;
        tablaposiciones.p_perdidos=p_perdidos;
        tablaposiciones.id_goles_favor=id_goles_favor;
        tablaposiciones.id_goles_contra=id_goles_contra;
        tablaposiciones.diferencia_g=diferencia_g;
        tablaposiciones.puntos=puntos;
        await tablaposiciones.save();
        res.json(tablaposiciones);
    } catch (error) {
        return res.status(500).json({message: error.message}) 
    }
};

export const deleteTablaposicion=async (req,res)=>{
    try {
        const {id}=req.params;
        await TablaPosicion.destroy({
            where:{
                id,
            },
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({message: error.message}) 
    }
};