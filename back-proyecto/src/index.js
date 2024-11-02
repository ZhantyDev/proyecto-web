import app from './app.js'
import { metodoIngreso } from './controllers/ingreso.controller.js'
import { registro } from './controllers/registro.controller.js'
import { historial } from './controllers/histotrial.controller.js'

const main = () =>{
    app.listen(app.get('port'))
    console.log("el puerto de escucha es; ", app.get('port'))    
    //console.log(metodoIngreso.ingreso())    
    //console.log(registro())    
    //console.log(historial())    
}
main()