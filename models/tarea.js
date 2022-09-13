const { v4:uuidv4 } = require("uuid");

class Tarea {
    id = "";
    desc = "";
    completadoEn = null;

    // this hace referencia a la instancia de la clase que se esta usando
    constructor(desc){
        this.id = uuidv4();
        this.desc = desc;
    } 
}

module.exports = Tarea;

