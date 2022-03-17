// //Pasos para consumir datos de un API (JS puro)

// //1.Para donde voy (URI del servidor)

// const URI="https://api.spotify.com/v1/artists/128ftF9X7Kd7Di2fq3wYVs/top-tracks?market=us"

// //2.Permisos
// const TOKEN="Bearer BQDseRc9x4m9en2umQTbRVCZEEkh6hYWeftBFINiQpz8satsqCC-w3U0mEE99VgJvFuPtlB4A7mHOAbSV3SxCYYl0C_nE2p9e6ldKj_CN5NXfXj7LZp3jzB2OahL3i6JgyrjHWIE9WNGPPF2r8b5Zc38NzpLulE"

// const PARAMETROS_PETICION={
//     methmethod:"GET",
//     headers:{Authorization:TOKEN}
// }


// //IR A TOCAR LA PUERTA
// fetch(URI,PARAMETROS_PETICION)
// .then(function(respuesta){
//    return(respuesta.json())
// })
// .then(function(respuesta){
//     pintarCanciones(respuesta.tracks)
//     respuesta.tracks.forEach(cancion => {
//         let fila=document.getElementById("fila")
//         let columna=document.createElement("div")
//         columna.classList.add("col")

//         let tarjeta=document.createElement("div")
//         tarjeta.classList.add("card")
//         tarjeta.classList.add("h-80")
//         tarjeta.classList.add("text-center")
//         tarjeta.classList.add("mb-3")

//         let imagen=document.createElement("img")
//         imagen.classList.add("card-img-top")
//         imagen.classList.add("p-3")
//         imagen.classList.add("h-100")
//         imagen.src=cancion.album.images[0].url

//         let nombreCancion=document.createElement("h4")
//         nombreCancion.textContent=cancion.name

//         let preview_url=document.createElement("audio")
//         preview_url.src=cancion.preview_url
//         preview_url.setAttribute("controls","controls")

//         tarjeta.appendChild(imagen)
//         tarjeta.appendChild(nombreCancion)
//         tarjeta.appendChild(preview_url)
//         columna.appendChild(tarjeta)
//         fila.appendChild(columna)

        

//         console.log(cancion.name)
//         console.log(cancion.preview_url)
//         console.log(cancion.album.images[0].url)
//     });
// })
// .catch(function(respuesta){
//     console.log("Upsss "+respuesta)
// })
// function pintarCanciones(canciones){
//     console.log("Estamos pintando")
//     console.log(canciones)
// }