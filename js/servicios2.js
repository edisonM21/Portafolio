import {PARAMETROS_PETICION}from './CONSTANTES.js'
export async function consumirAPI(URI){
    let respuesta= await fetch(URI,PARAMETROS_PETICION)
    let canciones=respuesta.json()
    return(canciones)
}

