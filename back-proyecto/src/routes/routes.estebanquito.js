import { Router } from "express";
import { MetodosEstebanquito } from "../controllers/controller.proyecto.js";
import cors from 'cors';
const router = Router();


// rutasss
router.get('/registro', cors({origin: 'http://localhost:5173'}), MetodosEstebanquito.Registro)

export default router;