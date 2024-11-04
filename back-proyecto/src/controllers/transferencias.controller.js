import { getConnection } from "../database/database.js";

export const transferir = async (req, res) => {
    let connection;
    const cuenta_id = JSON.parse(req.headers['usuario']).cuenta_id; // Asegúrate de que esto funcione correctamente
    const { banco, numeroCuenta, monto } = req.body;

    try {
        connection = await getConnection();
        
        if (!banco || !numeroCuenta || !monto) {
            return res.status(400).json({ message: "Todos los campos son obligatorios." });
        }

        const cantidad = parseFloat(monto);
        if (isNaN(cantidad) || cantidad <= 0) {
            return res.status(400).json({ message: "La cantidad debe ser un número positivo." });
        }

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

        // Verificar que la cuenta de destino exista
        const [cuentaDestino] = await connection.query('SELECT cuenta_id FROM Usuarios WHERE cuenta_id = ?', [numeroCuenta]);
        if (!cuentaDestino.length) {
            console.log("Cuenta de destino no encontrada");
            return res.status(404).json({ message: "Cuenta de destino no encontrada" });
        }

        // Actualizar el saldo en la base de datos
        await connection.query('UPDATE Usuarios SET saldo = saldo - ? WHERE cuenta_id = ?', [cantidad, cuenta_id]);
        await connection.query('UPDATE Usuarios SET saldo = saldo + ? WHERE cuenta_id = ?', [cantidad, numeroCuenta]);

        console.log("Transferencia exitosa");
        res.json({
            message: "Transferencia exitosa",
            saldoRestante: saldoActual - cantidad
        });
    } catch (error) {
        console.error("Error en la transferencia:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    } finally {
        if (connection) connection.release();
    }
};
