import {showFilms, sortBy, sortAz, sortZa, sortOldest, sortLessOld} from './data.js';
import data from './data/ghibli/ghibli.js';

// let dataFilms;             //<----Jalando toda la Data desde archivo json
// fetch('./data/ghibli/ghibli.json')
// .then(studio => studio.json())
// .then(data=>{
//   dataFilms = data.films;

let linkPeliculas = document.getElementById("linkPeliculas")
let linkInicio = document.getElementById("linkInicio2")
let home = document.getElementById("home")
let films1 = document.getElementById("films")


linkPeliculas.addEventListener('click',() => { // <---- Mostrar films y remover encabezado1
    home.style.display = "none";
    films1.style.display = "inline";
})

linkInicio.addEventListener('click', () => {
    home.style.display = "inline";
    films1.style.display="none";
   
})

showFilms(data.films) //----> Mostrando las peliculas

let popularidad = document.getElementById("Popularidad") //-----> Ordenando las peliculas por popularidad
popularidad.addEventListener("click", function(){
    showFilms(sortBy(data.films))
})

let AZ = document.getElementById("AZ"); //----> Ordenando de la A-Z
AZ.addEventListener("click", function(){
    showFilms(sortAz(data.films))
})

let ZA = document.getElementById("ZA"); //----> Ordenando de la Z-A
ZA.addEventListener("click", function(){
    showFilms(sortZa(data.films))
})

let masAntiguo = document.getElementById("masAntiguo"); //----> Ordenando por más antiguo 
masAntiguo.addEventListener("click", function(){
    showFilms(sortOldest(data.films))
})

let menosAntiguo = document.getElementById("menosAntiguo"); //----> Ordenando por menos antiguo 
menosAntiguo.addEventListener("click", function(){
    showFilms(sortLessOld(data.films))
})
