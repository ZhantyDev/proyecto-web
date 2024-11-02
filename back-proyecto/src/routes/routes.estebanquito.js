import { Router } from "express";
import { MetodosEstebanquito } from "../controllers/controller.proyecto.js";
import cors from 'cors';
const router = Router();


// rutasss
router.post('/registro', MetodosEstebanquito.Registro)

export default router;