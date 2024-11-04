import { getConnection } from "../database/database.js";

export const depositar = async (req, res) => {
    let connection;
    const cuenta_id1 = JSON.parse(req.headers['usuario']).cuenta_id;
    const { numeroCuenta, dineroDepositado } = req.body;

    try {
        connection = await getConnection();

        if (!numeroCuenta || !dineroDepositado) {
            return res.status(400).json({ message: "Todos los campos son obligatorios." });
        }

        const cantidad = parseFloat(dineroDepositado);
        if (isNaN(cantidad) || cantidad <= 0) {
            return res.status(400).json({ message: "La cantidad debe ser un número positivo." });
        }

        const [usuario] = await connection.query('SELECT saldo FROM Usuarios WHERE cuenta_id = ?', [cuenta_id1]);
        if (!usuario.length) {
            return res.status(404).json({ message: "Cuenta de origen no encontrada" });
        }

        const saldoActual = usuario[0].saldo;

        if (cantidad > saldoActual) {
            return res.status(400).json({ message: "Saldo insuficiente para realizar el depósito" });
        }

        const [cuentaDestino] = await connection.query('SELECT saldo FROM Usuarios WHERE cuenta_id = ?', [numeroCuenta]);
        if (!cuentaDestino.length) {
            return res.status(404).json({ message: "Cuenta de destino no encontrada" });
        }

        await connection.query('UPDATE Usuarios SET saldo = saldo - ? WHERE cuenta_id = ?', [cantidad, cuenta_id1]);
        await connection.query('UPDATE Usuarios SET saldo = saldo + ? WHERE cuenta_id = ?', [cantidad, numeroCuenta]);

        await connection.query(
            'INSERT INTO Transacciones (cuenta_id1, cuenta_id2, tipo, monto, fecha) VALUES (?, ?, ?, ?, NOW())',
            [cuenta_id1, numeroCuenta, 'deposito', cantidad]
        );

        await connection.query(
            'INSERT INTO Reportes (cuenta_id, historico_egresos) VALUES (?, ?) ON DUPLICATE KEY UPDATE historico_egresos = historico_egresos + ?',
            [cuenta_id1, cantidad, cantidad]
        );
        await connection.query(
            'INSERT INTO Reportes (cuenta_id, historico_ingresos) VALUES (?, ?) ON DUPLICATE KEY UPDATE historico_ingresos = historico_ingresos + ?',
            [numeroCuenta, cantidad, cantidad]
        );

        res.json({ message: "Depósito exitoso", saldoRestante: saldoActual - cantidad });
    } catch (error) {
        console.error("Error en el depósito:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    } 
};
