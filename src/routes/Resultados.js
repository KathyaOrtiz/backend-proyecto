import { Router } from "express";
import { createResultado, deleteResultado, getResultado, getResultados, updateResultado } from "../controllers/resultado.controller.js";
const router=Router();

router.get('/',getResultados);
router.get('/:id',getResultado)
router.post('/',createResultado)
router.put('/:id',updateResultado)
router.delete('/:id',deleteResultado)

export default router;