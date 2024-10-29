import {getConnection} from '../database/database.js'

const Registro = async(req, res)=>{
    try{
        const connection = await getConnection()
        const result = await connection.query('select * from Usuarios')
        res.json(result[0])

    }catch(error){
        console.log(error)
        res.status(500)
        res.send(error.message)
    }
}


export const MetodosEstebanquito = {
    
}