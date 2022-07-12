import {sortByScore, sortAz, sortZa, sortOldest, sortLessOld, filterByDirector, top10Films, filterByProducer } from './data.js';
import data from './data/ghibli/ghibli.js';

// let dataFilms;             //<----Jalando toda la Data desde archivo json
// fetch('./data/ghibli/ghibli.json')
// .then(studio => studio.json())
// .then(data=>{
//   dataFilms = data.films;

const btnMenu = document.getElementById("menu")
const linkPeliculas = document.getElementById("linkPeliculas")
const linkInicio = document.getElementById("linkInicio")
const linkStats = document.getElementById("linkEstadisticas")

const encabezadoNav = document.querySelector(".encabezadoNav")
const home = document.getElementById("home")
const films = document.getElementById("films")
const estadisticas = document.getElementById("estadisticas")

btnMenu.addEventListener("click", () => { //<------ Esconder menu hamburguesa
    encabezadoNav.classList.toggle("navVisible")
})

linkPeliculas.addEventListener('click', () => { // <---- Mostrar Peliculas
    home.style.display = "none";
    estadisticas.style.display = "none";
    films.style.display = "inline";
})

linkInicio.addEventListener('click', () => { //<---- Mostrar Inicio
    home.style.display = "flex";
    estadisticas.style.display = "none";
    films.style.display = "none";
})

linkStats.addEventListener("click", () => { //<---- Mostrar Stats
    home.style.display = "none";
    films.style.display = "none";
    estadisticas.style.display = "inline";
})

function getFilmDiv(film) { //<--- Creando contenedor html para las peliculas
    return `<div class="card" >
        <img id="${film.title}" class="filmposter" src="${film.poster}" alt="imagen">
        <img class="star" src="images/estrellita.png">
        <p class="score">${film.rt_score}</p>
        <h2>${film.title}</h2>
        <p>${film.release_date}</p>
        </div>`
  }

function showFilms(dataFilms) {
    const filmCards = document.getElementById("filmCards") //<-- Llamando al contenedor de html
    filmCards.innerHTML = '';
    dataFilms.forEach(film => {
        filmCards.innerHTML += getFilmDiv(film)
    })
    modal(dataFilms)
}
showFilms(data.films) //----> Mostrando cards de peliculas

function getInformationDiv(film) {     //------> Función para crear div de VENTANA MODAL
    const filmInformation = document.createElement("div");
    filmInformation.innerHTML = `<div class="ventanamodal">
    <section class = "synopsis">
    <aside class= "modalPoster"><img src="${film.poster}"></aside>
    <aside class = "modalSynopsis">
     <h2>${film.title}</h2>
     <hr>
     <p class="close">X</p>
     <p><b>Director:</b> ${film.director}</p>
     <p><b>Producer:</b> ${film.director}</p>
     <p><b>${film.release_date}</b></p>
     <br>
     <p>${film.description}</p>
     </aside>
     </section>
     <section class="characters">
     <h3>Characters</h3>
     <div class="charactersCards">
     </div>
     </section>
     <section class="locations">
     <h3>Locations</h3>
     <div class="locationCards">
     </div>
     </section>
     <section class="vehicles">
     <h3>Vehicles</h3>
     <div class="vehiclesCards">
     </div>
     </div>`
    showCharacters(film.people, filmInformation)
    showLocations(film.locations, filmInformation)
    showVehicles(film.vehicles, filmInformation)
    const divFilmInformation = document.getElementById("filmInformation")
    divFilmInformation.removeChild(divFilmInformation.firstChild)
    divFilmInformation.appendChild(filmInformation)
}

function modal(dataFilms) {
    let showInformation = document.querySelectorAll(".filmposter");
    showInformation.forEach(film => {
        film.addEventListener("click", function (event) {
            const title = event.target.id
            const filmInformation = document.getElementById("filmInformation")
            filmInformation.style.display = "flex";
            filmInformation.style.opacity = "1";

            getInformationDiv(dataFilms.find((film) => film.title === title)) //----> Mostrando la informacion de las peliculas

            const close = document.querySelector(".close");
            close.addEventListener("click", function () {      //----> Funcionalidad de boton close
                filmInformation.style.display = "none"
                filmInformation.style.opacity = "0"

            })
        })
    })
}

function showCharacters(dataPeople, modal) {        //------> Funcion para mostrar los personajes
    const character = modal.querySelector(".charactersCards")
    dataPeople.forEach(people => {
        character.innerHTML +=
            `<div class="flipCard" >
         <div class="card2 front" >
         <img id="${people.name}" src="${people.img}" alt="imagen">
         </div>
         <div class="card2 back" >
            <p><b>Name:</b>${people.name}<br>
            <b>Gender:</b>${people.gender}<br>
            <b>Age:</b>${people.age}<br>
            <b>Specie:</b>${people.specie}<br>
            </p>
         </div>
         </div>`

    })
}

function showLocations(dataLocations, modal) {        //------> Funcion para mostrar locations
    const location = modal.querySelector(".locationCards")
    dataLocations.forEach(locations => {
        location.innerHTML +=
            `<div class="flipCard">
            <div class= "card2 front">
        <img id="${locations.name}" src="${locations.img}" alt="imagen">
        </div>
        <div class="card2 back" >
            <p><b>Name:</b>${locations.name}<br>
            <b>Climate:</b>${locations.climate}<br>
            <b>Terrain:</b>${locations.terrain}<br>
            </p>
            </div>
            </div>`
    })
}

function showVehicles(dataVehicles, modal) {        //------> Funcion para mostrar los vehiculos
    const vehicles = modal.querySelector(".vehiclesCards")
    dataVehicles.forEach(vehicle => {
        vehicles.innerHTML +=
            `<div class="flipCard">
            <div class="card2 front" >
            <img id="${vehicle.name}" src="${vehicle.img}" alt="imagen">
            </div>
            <div class="card2 back" >
            <p><b>${vehicle.name}</b><br>
            ${vehicle.description}</p>
            </div>
            </div>`
    })

}

const inputSearch = document.getElementById("searchFilms")
inputSearch.addEventListener("keyup", e => {   //----> Funcionalidad de la busqueda
    let resultSearch = data.films.filter((film) => {
        return film.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    showFilms(resultSearch);
});

let popularidad = document.getElementById("Popularidad") //-----> Ordenando las peliculas por popularidad
popularidad.addEventListener("click", function () {
    showFilms(sortByScore(data.films))
})

let AZ = document.getElementById("AZ"); //----> Ordenando de la A-Z
AZ.addEventListener("click", function () {
    showFilms(sortAz(data.films))
})

let ZA = document.getElementById("ZA"); //----> Ordenando de la Z-A
ZA.addEventListener("click", function () {
    showFilms(sortZa(data.films))
})

let masAntiguo = document.getElementById("masAntiguo"); //----> Ordenando por más antiguo 
masAntiguo.addEventListener("click", function () {
    showFilms(sortOldest(data.films))
})

let menosAntiguo = document.getElementById("menosAntiguo"); //----> Ordenando por menos antiguo 
menosAntiguo.addEventListener("click", function () {
    showFilms(sortLessOld(data.films))
})

let byDirector = document.getElementById("directores"); //----> Filtrando por Director
byDirector.addEventListener("click", function (event) {
    const director = event.target.innerHTML
    showFilms(filterByDirector(data.films, director))
})

let byProducer = document.getElementById("productores"); //----> Filtrando por Productor
byProducer.addEventListener("click", function (event) {
    const producer = event.target.innerHTML
    showFilms(filterByProducer(data.films, producer ))
})

const dataFilms = data.films

let titleFilms = top10Films(dataFilms)
//let scores = top10Films.map((x)=> x.rt_score);
const colors = ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'orange', '#C32BAD', '#7027A0', '#6ECB63', '#3A6351', '#1E3163', '#C84B31'];
const ctx = document.getElementById("myChart").getContext("2d");
// eslint-disable-next-line
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: titleFilms[0],
        datasets: [
            {
                label: "Films",
                data: titleFilms[1],
                backgroundColor: colors,
                borderColor: [
                    'rgba(255, 99, 132, 1)'
                ]
            }
        ]

    },
});
myChart;
















// const directores = data.films.map(function(dataFilms){
//         return dataFilms.director
// })
// console.log(directores)

