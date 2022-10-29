import { Router } from "express";
import { createTablaposicion, deleteTablaposicion, getTablaposicion, getTablaposiciones, updateTablaposicion } from "../controllers/tablaposicion.controller.js";
const router=Router();

router.get('/',getTablaposiciones)
router.get('/:id',getTablaposicion)
router.post('/',createTablaposicion)
router.put('/:id',updateTablaposicion)
router.delete('/:id',deleteTablaposicion);

export default router;