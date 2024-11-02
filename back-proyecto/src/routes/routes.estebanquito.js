import { Router } from "express";
import {metodoRegistro} from "../controllers/registro.controller.js";
const router = Router();


// rutasss
router.post('/registro', metodoRegistro.Registro)

export default router;