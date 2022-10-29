import { Router } from "express";
import { createFase, deleteFase, getFase, getFases, updateFase } from "../controllers/fase.controller.js";
const router=Router();

router.get('/',getFases)
router.get('/:id',getFase)
router.post('/',createFase)
router.put('/:id',updateFase)
router.delete('/:id',deleteFase)

export default router;