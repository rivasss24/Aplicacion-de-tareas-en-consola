const { yellow } = require("colors");
const Tarea = require("./tarea");

class Tareas {


    _listado = {};


    get ListadoArr(){
        const listado = []


        Object.keys(this._listado).forEach( key =>{

            const tarea = this._listado[key];
            
            
            listado.push( tarea );

        });


        return listado;
    }
    
    constructor() {
        this._listado = {}
    }

    borrarTarea(id = ""){
        if(this._listado[id]){
            delete this._listado[id];
        }
    }

    cargarTareasFromArrary(tareas = []){
        tareas.forEach( tarea => {

            this._listado[tarea.id] = tarea;
        });
    }

    crearTarea( desc = "" )  {
    
        const tarea = new Tarea(desc);
        // lo de abajo es para guardar la tarea en el listado

        
        // se hace referencia a la propiedad de un objeto con []
        this._listado[tarea.id] = tarea;    
    }

    listadoCompleto(){
        // Completada: Verde
        // Pendiente: Rojo
        // 1. Primera Tarea :: Completada / Pendiente
        // En el forEach el segundo argumento que tenemos es el indice
        this.ListadoArr.forEach((tarea,i) => {
            const idx = `${i+1}.-`.yellow;
            // desestructuramos la desc
            const { desc, completadoEn} = tarea;
            const estado = (completadoEn) ? "Completado".green : "Pendiente".red;
            console.log(`${idx} ${desc} :: ${estado}`);
        });

    }

    listarPendientesCompletadas( completadas = true ){
        let contador = 0;
        this.ListadoArr.forEach((tarea) => {

            const { desc, completadoEn} = tarea;
            const estado = (completadoEn) ? "Completado".green : "Pendiente".red;
            if(completadas){
                // mostrar completadas
                if(completadoEn){
                    contador = contador + 1;
                    console.log(`${contador.toString().yellow}- ${desc} :: ${completadoEn.yellow}`);
                }

            } else {
                // mostrar pendientes
                if( !completadoEn ){
                    contador = contador + 1;
                    console.log(`${contador.toString().yellow}${"-".yellow} ${desc}`);
                }
            }
            // console.log(`${idx} ${desc} :: ${estado}`);
        });
    }

    toggleCompletadas(ids = []){

        ids.forEach( id =>{
            const tarea = this._listado[id];
            if ( !tarea.completadoEn ){
                tarea.completadoEn = new Date().toISOString();
            }
        })

        this.ListadoArr.forEach( tarea => {
            if (!ids.includes(tarea.id)){
    // Estamos seleccionando la tarea a la que le quitaremos el completado 
                // const tarea = this._listado[id];
                // tarea.completadoEn = null;
        // Para evitarnos ese paso podemos hacer la asignacion directa de esta manera:
        this._listado[tarea.id].completadoEn = null;
            }
        });
    }

}


module.exports = Tareas; 