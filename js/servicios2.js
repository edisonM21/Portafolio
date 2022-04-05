export async function consumirAPI(URI,generartoken){
    let parametros={
        method: "GET",
        headers: {Authorization:generartoken}
    }
    let respuesta= await fetch(URI,await parametros)
    let canciones=respuesta.json()
    return(canciones)
}

