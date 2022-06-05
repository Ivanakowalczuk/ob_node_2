//Crea un nuevo proyecto de Node

//- Instala la dependencia Winston
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

//- En el archivo index.js crea una función que devuelva un error con un mensaje personalizado
const miFuncion = valor => {
    if(typeof valor === "number"){
        return valor * 3   
     }
    throw new Error("Debes ingresar un número")
}

//- Registra el error en un archivo a través de un try...catch
const numero = "hol"
try{
console.log("Se ejecutó correctamente")
  const triple = miFuncion(numero)
console.log(triple)
}catch (e) {
logger.error(`${e}`)

}finally{
 console.log("Proceso finalizado")
}