export function pintarCanciones(resultado){
    resultado.tracks.forEach(cancion => {
        let fila=document.getElementById("fila")
        let columna=document.createElement("div")
        columna.classList.add("col")

        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card")
        tarjeta.classList.add("h-100")
        tarjeta.classList.add("text-center")
        tarjeta.classList.add("mb-3")
        tarjeta.classList.add("border-dark")

        let imagen=document.createElement("img")
        imagen.classList.add("card-img-top")
        imagen.classList.add("p-5")
        imagen.classList.add("h-100")
        imagen.src=cancion.album.images[0].url

        let nombreCancion=document.createElement("h4")
       // nombreCancion.classList.add("text-white")
        nombreCancion.textContent=cancion.name

        let preview_url=document.createElement("audio")
        preview_url.src=cancion.preview_url
        preview_url.setAttribute("controls","controls")

        let boton=document.getElementById("")
        boton

        tarjeta.appendChild(imagen)
        tarjeta.appendChild(nombreCancion)
        tarjeta.appendChild(preview_url)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
        
    });
}