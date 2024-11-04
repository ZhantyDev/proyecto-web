import { getConnection } from '../database/database.js';

// Controlador para solicitar préstamo
export const solicitarPrestamo = async (req, res) => {
    const { cuenta_id, monto, plazo } = req.body;

    if (!cuenta_id || monto == null || !plazo) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    try {
        // Verificar si el usuario existe y obtener el saldo
        const [userResult] = await db.query(
            'SELECT saldo FROM Usuarios WHERE cuenta_id = ?',
            [cuenta_id]
        );

        if (!userResult || userResult.length === 0) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        const saldo = userResult[0].saldo;
        const montoMinimo = monto * 0.1;

        if (saldo < montoMinimo) {
            return res.status(400).json({
                error: 'Saldo insuficiente. Necesitas al menos el 10% del monto solicitado en tu cuenta.',
            });
        }

        const [insertResult] = await db.query(
            'INSERT INTO Prestamos (usuario_id, monto, plazo, fecha_solicitud) VALUES (?, ?, ?, NOW())',
            [cuenta_id, monto, plazo]
        );

        res.status(201).json({ message: 'Préstamo solicitado con éxito', id: insertResult.insertId });
    } catch (error) {
        console.error('Error en solicitarPrestamo:', error);
        res.status(500).json({ error: 'Error al procesar la solicitud de préstamo' });
    }
};
