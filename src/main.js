import {showFilms, sortAz} from './data.js';
import data from './data/ghibli/ghibli.js';
// console.log(films, data);

// let dataFilms;             //<----Jalando toda la Data desde archivo json
// fetch('./data/ghibli/ghibli.json')
// .then(studio => studio.json())
// .then(data=>{
//   dataFilms = data.films;

showFilms(data.films)

let AZ = document.getElementById("AZ");
AZ.addEventListener("click", function(){
   showFilms(sortAz(data.films))
})

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
