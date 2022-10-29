import app from './app.js';
import { PORT } from './config.js';
import { sequelize } from './db.js';
import {Equipo,Pais,Grupo,Partido,Resultado} from './models/relacion.js'


(async()=>{
    try {
    await sequelize.authenticate();
    await sequelize.sync({force:false});
    
    console.log('Conectado a base de datos')
    } catch (error) {
        console.log('Fallo en la conexion')
    }
    
})();



app.listen(PORT,()=>{
    console.log('Servidor en el puerto',PORT);
});



