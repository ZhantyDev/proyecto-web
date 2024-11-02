import { Router } from "express";
import { metodoIngreso } from "../controllers/ingreso.controller.js";
const router = Router();


// rutasss
router.post('/ingreso', metodoIngreso.ingreso)

export default router;