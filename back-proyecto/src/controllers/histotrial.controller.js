import { getConnection } from '../database/database.js';

export const historial = async (req,res) => {
    let connection;
    const {cuenta_id} = req.body    
    try {
        connection = await getConnection();
    const [info] = await connection.query('SELECT * FROM Reportes WHERE cuenta_id = ?', [cuenta_id]);
        
        if (info.length === 0) {
            console.log('No se encontraron reportes');
            return res.status(401).json({ message: "no se encontraron reportes" });
        } else {
            console.log('Información encontrada:', info); // Muestra el resultado en consola
            return res.status(200).json({ message: "Inicio de sesión exitoso", info });
        }
    } catch (error) {
        res('Error al obtener el historial:', error);
    } 
};