import {Estadio} from '../models/Estadio.js'
export const getEstadios=async(req,res)=>{
    try {
        const estadios=await Estadio.findAll();
        res.json(estadios)
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const getEstadio=async(req,res)=>{
    try {
        const {id}=req.params;
        const estadio=await Estadio.findOne({
            where:{
                id,
            }
        });
        if (!estadio) {
            return res.status(404).json({message: 'No existe'})
        };
        res.json(estadio);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const createEstadio=async(req,res)=>{
    try {
        const {nombre,ubicacion,capacidad}=req.body;
        const nuevoEstadio=await Estadio.create({
            nombre,
            ubicacion,
            capacidad
        });
        res.json(nuevoEstadio);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
  
};

export const updateEstadio=async(req,res)=>{
    try {
        const {id}=req.params;
        const {nombre,ubicacion,capacidad}=req.body;
        const estadio=await Estadio.findByPk((id));
        estadio.nombre=nombre;
        estadio.ubicacion=ubicacion;
        estadio.capacidad=capacidad;
        await estadio.save();
        res.json(estadio);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
};

export const deleteEstadio=async(req,res)=>{
    try {
        const {id}=req.params;
        await Estadio.destroy({
            where:{
                id,
            },
        });
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
};
