import { getConnection } from "../database/database.js";

export const registro = async(req, res)=>{   
    let connection 
    const { cuenta_id, nombre, email, contraseña, tipo } = req.body

    try {
        connection = await getConnection();
        const existe = await connection.query('SELECT * FROM Usuarios WHERE cuenta_id = ? OR email = ?', [cuenta_id, email]);
        if (existe[0].length > 0) {
            return res.status(400).json({ message: "El usuario ya existe" });
        }
        await connection.execute('INSERT INTO Usuarios (cuenta_id, nombre, email, contraseña, tipo, saldo) VALUES (?, ?, ?, ?, ?, 0)', [cuenta_id, nombre, email, contraseña, tipo]);
        return res.status(201).json({ message: "Usuario registrado exitosamente" });
    } catch (error) {
        return res.status(500).json({ message: "Error en el servidor" });
    }
}