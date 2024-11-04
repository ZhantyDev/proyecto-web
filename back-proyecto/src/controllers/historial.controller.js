import { getConnection } from "../database/database.js";
import {metodoIngreso} from './ingreso.controller.js'

export const historial = async(req, res)=>{
    let connection
    connection = await getConnection()
    const info = await connection.query('select * from Reportes where cuenta_id = ?', [metodoIngreso.usuarioIngresado[0].cuenta_id])
    return res.json(info)
}