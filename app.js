require("colors");
// const { mostrarMenu, pausa } = require("./helpers/mensajes"); 
const { guardarDB,leerDB } = require("./helpers/guardaArchivo");

const { inquirerMenu,
        pausa,
        leerInput,
        listadoTareasBorrar,
        confirmar,
        mostrarListadoCheckList
      } = require("./helpers/inquirer");

const Tareas = require("./models/tareas");



const RUTA = "./db/data.json"

const limpiar = () => {
    console.clear();
}




const main = async() => {

    // console.log("Hola mundo");

    let opt = "";
    
    const tareas = new Tareas();

    const tareasDB = leerDB(RUTA);

    if (tareasDB){
        // Establecer las tareas aqui
        tareas.cargarTareasFromArrary( tareasDB );
    }
    // Caso contrario, si las tareas no existen :

    do {

        // imprimir el menu 
        opt =  await inquirerMenu();
        // console.log({opt});

        switch (opt) {
            case "1":
                // crear opcion
                // limpiar();
                const desc = await leerInput("Descripción de tarea: ");
                // console.log(`La descripcion de la tarea es:"\n${desc}`);
                const okCrearTarea = await confirmar("¿DESEA CREAR LA TAREA?");
                // console.log({okCrearTarea});
                if(okCrearTarea){
                    tareas.crearTarea(desc);
                    console.log("\n  TAREA CREADA".yellow);
                }
            break;

            case "2":
                // limpiar();
                // console.log(tareas._listado);
                // console.log(tareas.ListadoArr);
                tareas.listadoCompleto();
            break;

            case "3": //Listar Completadas
                // limpiar();
                tareas.listarPendientesCompletadas(true);
            break;

            case "4": //Listar Pendientes
                // limpiar();
                tareas.listarPendientesCompletadas(false);
            break;

            case "5": //Completado // Pendiente  
                const ids = await mostrarListadoCheckList( tareas.ListadoArr);
                tareas.toggleCompletadas( ids );
            break;

            case "6": // Borrar
                // limpiar();
                // const id porque nos dara el id de la que borraremos
                const id = await listadoTareasBorrar(tareas.ListadoArr);

                if(id !== "0"){
                    const ok = await confirmar("¿Estas seguro?".yellow);
                    //preguntar si esta seguro 
                    if (ok ){
                        tareas.borrarTarea(id);
                        console.log("\n  TAREA BORRADA".yellow);
                    }
                }

                // console.log({ok});
            break;
        }

        // if (opt !== "0") await pausa();
        // else console.log("Adieu");

        // buen intento xD 
        // guardarDB(RUTA,`${tareas.ListadoArr}`);


        guardarDB(RUTA,tareas.ListadoArr);

        await pausa();
        console.clear();
    }

    while( opt !== "0" );
    // pausa();
}


main(); 