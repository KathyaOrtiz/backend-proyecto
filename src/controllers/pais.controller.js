import {Pais} from '../models/Pais.js'
export const getPaises=async(req,res)=>{
    try {
    const paises=await Pais.findAll();
    res.json(paises)
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};
export const getPais=async(req,res)=>{
    try {
        const {id}=req.params;
        const pais=await Pais.findOne({
            where:{
                id
            }
        })
        if(!pais){
            return res.status(404).json({message: 'No existe'})
        }
        res.json(pais)
    
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}
export const createPais=async(req,res)=>{
    try {
        const {nombre,copas,rankingfifa,region}=req.body;

    const nuevoPais=await Pais.create({
        nombre,
        copas,
        rankingfifa,
        region
    })

   res.json(nuevoPais);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const updatePais=async(req,res)=>{
    try {
        const {id}=req.params;
        const {nombre,copas,rankingfifa,region}=req.body;
        const pais=await Pais.findByPk((id))
        pais.nombre=nombre;
        pais.copas=copas;
        pais.rankingfifa=rankingfifa;
        pais.region=region;
        await pais.save();
    
        res.json(pais);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
   
};

export const deletePais=async(req,res)=>{
    try {
        const {id}=req.params;
        await Pais.destroy({
            where:{
                id,
            },
        });
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }

};