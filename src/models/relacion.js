import { Pais } from "./Pais.js";
import { Equipo } from "./Equipo.js";
import { Grupo } from "./Grupo.js";
import { Partido } from "./Partidos.js";
import { Estadio } from "./Estadio.js";
import { Fase } from "./Fase.js";
import { Resultado } from "./Resultado.js";
import { TablaPosicion } from "./TablaPosicion.js";

//un equipo solo tiene un pais y un pais solo pertece a un equipo
//llave foranea en la tabla equipo por eso utilizo primero el belongsto
Equipo.belongsTo(Pais,{foreignKey:'id_pais'});
//llave foranea en la tabla equipo
Pais.hasOne(Equipo,{foreignKey:'id_pais'});

//un grupo tiene varios equipos y un equipo solo pertece a un grupo
//relacion de uno a muchos 
//un grupo tiene varios equipos
//significa que tengo mi llave foranea en la tabla grupo
Grupo.belongsTo(Equipo,{foreignKey:'id_equipo'});
//significa que tengo mi llave foranea en mi modelo grupo
Equipo.hasMany(Grupo,{foreignKey:'id_equipo'});

//llaves foraneas de tabla partido

//relacion equipo1 para partido
Partido.belongsTo(Equipo,{foreignKey:'id_equipo1',as:'equipo1'});
Equipo.hasOne(Partido,{foreignKey:'id_equipo1',as:'equipo1'});

//relacion equipo2 para partido

Partido.belongsTo(Equipo,{foreignKey:'id_equipo2',as:'equipo2'});
Equipo.hasOne(Partido,{foreignKey:'id_equipo2',as:'equipo2'});

//relacion uno a muchos, varios partidos se jugaran en ese estadio
//la fk se encuentra en partido  ,un estadio pertece a partido
Partido.belongsTo(Estadio,{foreignKey:'id_estadio'});
//y en ese estadio se jugaran distintos partidos
Estadio.hasMany(Partido,{foreignKey:'id_estadio'})

Partido.belongsTo(Fase,{foreignKey:'id_fase'})
Fase.hasOne(Partido,{foreignKey:'id_fase'})


//Relacion para resultados
//un resultado pertenece a un partido
Resultado.belongsTo(Partido,{foreignKey:'id_partido'});
//un partido puede tener un resultado
Partido.hasOne(Resultado,{foreignKey:'id_partido'})

//relacion para tabla posiciones generales
//tabla posiciones para equipos 
//una posicion pertenece a equipo
TablaPosicion.belongsTo(Equipo,{foreignKey:'id_equipo',as:'equipo'});
//un equipo puede tener una posicion
Equipo.hasOne(TablaPosicion,{foreignKey:'id_equipo', as:'equipo'});

export {Equipo,Pais,Grupo,Partido,Fase,Resultado}




