import { getConnection } from "../database/database.js";

export const retirar = async (req, res) => {
    let connection;
    const cuenta_id = '3111111111'
    const cantidad = 200;

    try {
        connection = await getConnection();
        
        // Verificar que la cuenta existe y obtener el saldo actual
        const [usuario] = await connection.query('SELECT saldo FROM Usuarios WHERE cuenta_id = ?', [cuenta_id]);
        
        if (!usuario.length) {
            console.log("Cuenta no encontrada");
            return res.status(404).json({ message: "Cuenta no encontrada" });
        }

        const saldoActual = usuario[0].saldo;

        // Verificar si el saldo es suficiente
        if (cantidad > saldoActual) {
            console.log("Saldo insuficiente");
            return res.status(400).json({ message: "Saldo insuficiente" });
        }

        // Generar el código de retiro de 6 dígitos
        const codigoRetiro = Math.floor(100000 + Math.random() * 900000);

        // Actualizar el saldo en la base de datos
        await connection.query('UPDATE Usuarios SET saldo = saldo - ? WHERE cuenta_id = ?', [cantidad, cuenta_id]);

        console.log("Retiro exitoso, código:", codigoRetiro);
        res.json({
            message: "Retiro exitoso",
            codigoRetiro: codigoRetiro,
            saldoRestante: saldoActual - cantidad
        });
    } catch (error) {
        console.error("Error en el retiro:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    } finally {
        if (connection) connection.release();
    }
};