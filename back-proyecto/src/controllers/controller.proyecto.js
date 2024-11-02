import {getConnection} from '../database/database.js'

let usuarioRegistrado = []
const Registro = async(req, res)=>{
    const { email, contraseña } = req.body;
    if (!email || !contraseña) {
        return res.status(400).json({ message: 'ingrese correo Y contraseña.' });
    }
    try{
        const result = await connection.query('select * from Usuarios where email = ?', [email])
        if (result.lengt === 0){
            return res.status(401).json({ message: 'credenciales invalidas, el usuario no existe' });
        }
        
        if (contraseña == result.contraseña){
            return true
            usuarioRegistrado = result;
        } else{
            return res.status(401).json({ message: 'contraseña incorrecta' });
        }
        

    }catch(error){
        console.log(error)
    }
}


export const MetodosEstebanquito = {
    Registro
    
}