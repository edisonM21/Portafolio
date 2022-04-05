import { consumirAPI } from "./servicios2.js"
import {generartoken} from "./CONSTANTES.js"
import { pintarCanciones } from "./pintar.js"
let fila=document.getElementById("fila")
let Artistas=[
    {URI:"https://api.spotify.com/v1/artists/128ftF9X7Kd7Di2fq3wYVs/top-tracks?market=us",foto:"../img/jamby.jpg"},
    {URI:"https://api.spotify.com/v1/artists/4SsVbpTthjScTS7U2hmr1X/top-tracks?market=us",foto:"../img/arcangel.jpg"},
    {URI:"https://api.spotify.com/v1/artists/3EiLUeyEcA6fbRPSHkG5kb/top-tracks?market=us",foto:"../img/De la ghetto.jpg"},
    {URI:"https://api.spotify.com/v1/artists/1TA5sGRlKUJXBN4ZyJuDIX/top-tracks?market=us",foto:"../img/Bless.jpg"},
    {URI:"https://api.spotify.com/v1/artists/7j6DKwmjbxvpQO8h914uEz/top-tracks?market=us",foto:"../img/ryancastro.jpg"}
]
let token= await generartoken()
let imagen=document.getElementById("imagen1")
let resultado=await consumirAPI(Artistas[0].URI,token)
pintarCanciones(resultado)

let botones=document.querySelectorAll(".dropdown-item")
botones.forEach((boton,index)=>{
    boton.addEventListener("click",async function(){
        fila.innerHTML=""      
        resultado=await consumirAPI(Artistas[index].URI,token)
        imagen.src=Artistas[index].foto
        pintarCanciones(resultado)
    })
})


