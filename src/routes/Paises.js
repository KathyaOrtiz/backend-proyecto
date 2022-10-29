import {Router} from 'express';
import { createPais, deletePais, getPais, getPaises, updatePais } from '../controllers/pais.controller.js';
const router=Router();

//ROUTES
router.get('/',getPaises)
router.get('/:id',getPais)
router.post('/',createPais)
router.put('/:id',updatePais)
router.delete('/:id',deletePais)


export default router;