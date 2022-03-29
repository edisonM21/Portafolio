import {generartoken}from './CONSTANTES.js'
export async function consumirAPI(URI){
    let respuesta= await fetch(URI,generartoken())
    let canciones=respuesta.json()
    return(canciones)
}

