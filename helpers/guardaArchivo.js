const fs = require("fs");
const { version } = require("os");

const guardarDB = (RUTA,data) => {

    // const archivo = "./db/data."

    // guardar un archivo de texto

    // JSON.stringify() -> convierte un objeto a su version json 
    fs.writeFileSync(RUTA, JSON.stringify(data)); 
}

const leerDB = (RUTA) => {
    // Si no existe
    // fs.existsSync() -> saber si un archivo existe
    if( !fs.existsSync(RUTA)){
        return null;
    }
    // readFileSync()-> leer archivo
    // el segundo parametro es el encoding , es para que no me devuelva bits
    const info = fs.readFileSync(RUTA, {encoding:"utf-8"});
    const data = JSON.parse(info);

    // console.log(data)
    
    return data;
}

module.exports = {
    guardarDB,
    leerDB
}