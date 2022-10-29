import {Router} from 'express';
import { createEquipo, deleteEquipo, getEquipo, getEquipos, updateEquipo } from '../controllers/equipo.controller.js';
const router=Router();

router.get('/',getEquipos)
router.get('/:id',getEquipo)
router.post('/',createEquipo)
router.put('/:id',updateEquipo)
router.delete('/:id',deleteEquipo)


export default router;