import { Router } from "express";
import {metodoIngreso} from "../controllers/ingreso.controller.js";
import {registro} from '../controllers/registro.controller.js'
import { historial } from "../controllers/historial.controller.js";
import {retirar} from '../controllers/retiros.controller.js'
import { transferir } from '../controllers/transferencias.controller.js';
const router = Router();


// rutasss
router.post('/', metodoIngreso.ingreso)
router.post('/registro', registro)
router.post('/historial', historial)
router.post('/retiros', retirar);
router.post('/transferencias', transferir)

export default router;