import express from 'express';
import cors from 'cors';
import PaisRoutes from './routes/Paises.js';
import EquipoRoutes from './routes/Equipos.js';
import FaseRoutes from './routes/Fases.js'
import GrupoRoutes from './routes/Grupos.js'
import EstadioRoutes from './routes/Estadios.js'
import PartidoRoutes from './routes/Partidos.js'
import ResultadoRoutes from './routes/Resultados.js'
import TablaPosicionRoutes from './routes/TablaPosiciones.js'
const app=express();

//middelwares
app.use(cors())
app.use(express.json())


app.use('/paises',PaisRoutes);
app.use('/equipos',EquipoRoutes);
app.use('/fases',FaseRoutes);
app.use('/grupos',GrupoRoutes)
app.use('/estadios',EstadioRoutes)
app.use('/partidos',PartidoRoutes)
app.use('/resultados',ResultadoRoutes)
app.use('/tablaposiciones',TablaPosicionRoutes)



export default app;