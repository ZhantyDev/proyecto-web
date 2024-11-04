import { getConnection } from "../database/database.js";

export const transferir = async (req, res) => {
    let connection;
    const cuenta_id1 = JSON.parse(req.headers['usuario']).cuenta_id;
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

        const [usuario] = await connection.query('SELECT saldo FROM Usuarios WHERE cuenta_id = ?', [cuenta_id1]);
        if (!usuario.length) {
            return res.status(404).json({ message: "Cuenta no encontrada" });
        }

        const saldoActual = usuario[0].saldo;

        if (cantidad > saldoActual) {
            return res.status(400).json({ message: "Saldo insuficiente" });
        }

        if (banco === 'Armandoestebanquito') {
            const [cuentaDestino] = await connection.query('SELECT saldo FROM Usuarios WHERE cuenta_id = ?', [numeroCuenta]);

            if (cuentaDestino.length) {
                await connection.query('UPDATE Usuarios SET saldo = saldo + ? WHERE cuenta_id = ?', [cantidad, numeroCuenta]);
            } else {
                console.log("Cuenta de destino no encontrada en Armandoestebanquito");
            }
        }

        await connection.query('UPDATE Usuarios SET saldo = saldo - ? WHERE cuenta_id = ?', [cantidad, cuenta_id1]);

        await connection.query(
            'INSERT INTO Transacciones (cuenta_id1, cuenta_id2, tipo, monto, fecha) VALUES (?, ?, ?, ?, NOW())',
            [cuenta_id1, numeroCuenta, 'transferencia', cantidad]
        );

        await connection.query(
            'INSERT INTO Reportes (cuenta_id, historico_egresos) VALUES (?, ?) ON DUPLICATE KEY UPDATE historico_egresos = historico_egresos + ?',
            [cuenta_id1, cantidad, cantidad]
        );

        if (banco === 'Armandoestebanquito' && cuentaDestino.length) {
            await connection.query(
                'INSERT INTO Reportes (cuenta_id, historico_ingresos) VALUES (?, ?) ON DUPLICATE KEY UPDATE historico_ingresos = historico_ingresos + ?',
                [numeroCuenta, cantidad, cantidad]
            );
        }

        res.json({ message: "Transferencia exitosa", saldoRestante: saldoActual - cantidad });
    } catch (error) {
        console.error("Error en la transferencia:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    } finally {
        if (connection) connection.end();
    }
}
