import { getConnection } from "../database/database.js";

export const historial = async(req, res)=>{
    let connection
    const { cuenta_id } = req.body
    connection = await getConnection()
    const info = await connection.query('select * from Reportes where cuenta_id = ?', [cuenta_id])
    return res.json(info)
}