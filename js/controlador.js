import { consumirAPI } from "./servicios2.js"

import { pintarCanciones } from "./pintar.js"
let fila=document.getElementById("fila")
let Artistas=[
    {URI:"https://api.spotify.com/v1/artists/128ftF9X7Kd7Di2fq3wYVs/top-tracks?market=us"},
    {URI:"https://api.spotify.com/v1/artists/4SsVbpTthjScTS7U2hmr1X/top-tracks?market=us"},
    {URI:"https://api.spotify.com/v1/artists/3EiLUeyEcA6fbRPSHkG5kb/top-tracks?market=us"},
    {URI:"https://api.spotify.com/v1/artists/1TA5sGRlKUJXBN4ZyJuDIX/top-tracks?market=us"},
    {URI:"https://api.spotify.com/v1/artists/33ScadVnbm2X8kkUqOkC6Z/top-tracks?market=us"}
]
let resultado=await consumirAPI(Artistas[0].URI)
pintarCanciones(resultado)

let botones=document.querySelectorAll(".dropdown-item")
botones.forEach((boton,index)=>{
    boton.addEventListener("click",async function(){
        fila.innerHTML=""
        resultado=await consumirAPI(Artistas[index].URI)
        pintarCanciones(resultado)
    })
})


