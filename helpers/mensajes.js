// const { rejects } = require("assert");
// const { resolve } = require("path");

// require("colors")

// const mostrarMenu = ()=>{

//     //las promesas se disparan con el resolve & reject
//     return new Promise(resolve => {

//         console.clear();
//         console.log("=======================".blue);
//         console.log(" Seleccione una opción ".blue);
//         console.log("=======================\n".blue);
    
//         console.log(`${"1.-".yellow} Crear tarea`);
//         console.log(`${"2.-".yellow} Listar tarea`);
//         console.log(`${"3.-".yellow} Listar tareas completadas`);
//         console.log(`${"4.-".yellow} Listar tareas pendientes`);
//         console.log(`${"5.-".yellow} Completar tarea(s)`);
//         console.log(`${"6.-".yellow} Borrar tarea`);
//         console.log(`${"0.-".yellow} Salir\n`);
    
//         const readline = require("readline").createInterface({
//             input: process.stdin,
//             output: process.stdout
//         });
    
//         readline.question( "Seleccione una opcion: " , (opt)=>{
//             readline.close();
//             resolve(opt);
//         });
//     });
// }

// const pausa = () => {

//     return new Promise( resolve => {

//         const readline = require("readline").createInterface({
//             input: process.stdin,
//             output: process.stdout
//         });
    
//         readline.question( `\nPresione ${"ENTER".green} para continuar\n` , (pause)=>{
//             readline.close();
//             resolve();
//         });
//     });
// }

// module.exports = {
//     mostrarMenu,
//     pausa
// }