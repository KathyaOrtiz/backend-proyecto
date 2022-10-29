import { Router } from "express";
import { createPartido, deletePartido, getPartido, getPartidos, updatePartido } from "../controllers/partido.controller.js";
const router=Router();

router.get('/',getPartidos)
router.get('/:id',getPartido)
router.post('/',createPartido)
router.put('/:id',updatePartido)
router.delete('/:id',deletePartido)

export default router;