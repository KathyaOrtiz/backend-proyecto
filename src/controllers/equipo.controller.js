
import { Equipo } from "../models/Equipo.js"
import { Pais } from "../models/Pais.js"


export const getEquipos=async(req,res)=>{
    try {
        const equipos=await Equipo.findAll({
            include: {
                model: Pais,
                attributes:['nombre','copas']
      
              }
        })
        res.json(equipos)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const getEquipo=async(req,res)=>{
    try {
        const {id}=req.params;
        const equipo=await Equipo.findOne({
            where:{
                id
            },
            include: {
                model: Pais,
                attributes:['nombre','copas']
      
              }
        })
        if (!equipo) {
            return res.status(404).json('No existe este equipo')
        }
        res.json(equipo)
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
} 

export const createEquipo=async(req,res)=>{
    try {
        const {nombre,id_pais}=req.body
        const nuevoEquipo=await Equipo.create({
            nombre,
            id_pais,
        });
        res.json(nuevoEquipo)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }

}

export const updateEquipo=async(req,res)=>{
   try {
    const {id}=req.params;
    const {nombre,id_pais}=req.body;
    const equipo=await Equipo.findByPk((id));
    equipo.nombre=nombre;
    equipo.id_pais=id_pais;
    await equipo.save();
    res.json(equipo)

   } catch (error) {
    return res.status(500).json({message: error.message})
   } 
}

export const deleteEquipo=async(req,res)=>{
    try {
        const {id}=req.params;
        await Equipo.destroy({
            where:{
                id,
            },
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}