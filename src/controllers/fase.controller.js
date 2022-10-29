import { Fase } from "../models/Fase.js"

export const getFases=async(req,res)=>{
    try {
        const fases=await Fase.findAll();
        res.json(fases)
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const getFase=async(req,res)=>{
    try {
        const {id}=req.params;
        const fase=await Fase.findOne({
            where:{
                id,
            },
        });
        if (!fase) {
            return res.status(404).json({message: 'No existe'}) 
        }
        res.json(fase);

    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const createFase=async(req,res)=>{
    try {
        const {nombre}=req.body;
        const nuevaFase=await Fase.create({
            nombre,
        });
        res.json(nuevaFase);

    } catch (error) {
          return res.status(500).json({message: error.message});
    }
};

export const updateFase=async(req,res)=>{
    try {
        const {id}=req.params;
        const {nombre}=req.body;
        const fase=await Fase.findByPk((id));
        fase.nombre=nombre;
        await fase.save();
        res.json(fase);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const deleteFase=async(req,res)=>{
    try {
        const {id}=req.params;
        await Fase.destroy({
            where:{
                id,
            },
        });
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
};
