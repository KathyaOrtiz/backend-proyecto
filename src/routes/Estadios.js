import { Router } from "express";
import { createEstadio, deleteEstadio, getEstadio, getEstadios, updateEstadio } from "../controllers/estadio.controller.js";
const router=Router();

router.get('/',getEstadios)
router.get('/:id',getEstadio)
router.post('/',createEstadio)
router.put('/:id',updateEstadio)
router.delete('/:id',deleteEstadio)

export default router;