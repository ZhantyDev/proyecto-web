import { getConnection } from '../database/database.js';

export const solicitarPrestamo = async (req, res) => {
    let connection;
    const { cuenta_id, monto, plazo } = req.body;

    try {
        connection = await getConnection();

        if (!cuenta_id || monto == null || !plazo) {
            return res.status(400).json({ message: "Todos los campos son obligatorios" });
        }

        const cantidad = parseFloat(monto);
        if (isNaN(cantidad) || cantidad <= 0) {
            return res.status(400).json({ message: "La cantidad debe ser un número positivo" });
        }

        const [userResult] = await connection.query(
            'SELECT saldo FROM Usuarios WHERE cuenta_id = ?',
            [cuenta_id]
        );

        if (!userResult || userResult.length === 0) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        const saldo = userResult[0].saldo;
        const montoMinimo = cantidad * 0.1;

        if (saldo < montoMinimo) {
            await connection.query(
                'INSERT INTO Prestamos (usuario_id, monto, plazo, estado, fecha_solicitud) VALUES (?, ?, ?, "rechazado", NOW())',
                [cuenta_id, cantidad, plazo]
            );
            return res.status(400).json({
                error: 'No tienes en tu cuenta el monto mínimo para solicitar el préstamo',
            });
        } else {
            await connection.query(
                'UPDATE Usuarios SET saldo = saldo + ? WHERE cuenta_id = ?',
                [cantidad, cuenta_id]
            );

            await connection.query(
                'INSERT INTO Prestamos (usuario_id, monto, plazo, estado, fecha_solicitud) VALUES (?, ?, ?, "aprobado", NOW())',
                [cuenta_id, cantidad, plazo]
            );

            await connection.query(
                'INSERT INTO Reportes (cuenta_id, deudas) VALUES (?, ?) ON DUPLICATE KEY UPDATE deudas = deudas + ?',
                [cuenta_id, cantidad, cantidad]
            );
        }

        res.status(201).json({ message: 'Préstamo solicitado con éxito', saldo: saldo + cantidad });
    } catch (error) {
        console.error('Error al momento de solicitar el préstamo:', error);
        res.status(500).json({ error: 'Error al procesar la solicitud de préstamo' });
    }
};

