import app from './app.js'
import { MetodosEstebanquito } from './controllers/controller.proyecto.js'

const main = () =>{
    app.listen(app.get('port'))
    console.log("el puerto de escucha es; ", app.get('port'))    
}
main()