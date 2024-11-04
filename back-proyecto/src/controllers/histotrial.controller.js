import { getConnection } from '../database/database.js';

export const historial = async (req, res) => {
    let connection;
    const { cuenta_id } = req.body; // Extrae `cuenta_id` de `req.body`

    try {
        connection = await getConnection();
        const [info] = await connection.query('SELECT * FROM Transacciones WHERE cuenta_id = ?', [cuenta_id]);

        if (info.length === 0) {
            console.log('No se encontraron reportes');
            return res.status(401).json({ message: "No se encontraron reportes" });
        } else {
            console.log('Información encontrada:', info);
            return res.status(200).json({ message: "Inicio de sesión exitoso", info });
        }
    } catch (error) {
        console.error('Error al obtener el historial:', error);
        return res.status(500).json({ message: 'Error al obtener el historial', error });
    }
};
