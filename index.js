//Crea un nuevo proyecto de Node
//- Instala la dependencia Winston

const winston = require("winston");


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