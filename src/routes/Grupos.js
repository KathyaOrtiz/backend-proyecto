import { Router } from "express";
import { createGrupo, deleteGrupo, getGrupo, getGrupos, updateGrupo } from "../controllers/grupo.controller.js";
const router =Router();

router.get('/',getGrupos)
router.get('/:id',getGrupo)
router.post('/',createGrupo)
router.put('/:id',updateGrupo)
router.delete('/:id',deleteGrupo)

export default router;