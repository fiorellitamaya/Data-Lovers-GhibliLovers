export function showFilms(dataFilms) {
  const filmCards = document.getElementById("filmCards") //<-- Llamando al contenedor de html
  filmCards.innerHTML='';
  dataFilms.forEach(film => {
    filmCards.innerHTML+= getFilmDiv(film)
  })
}

export function getFilmDiv(film) { //<--- Creando divs para las peliculas
  return `<div class="card">
      <img src="${film.poster}" alt="imagen">
      <img id="star" src="images/estrellita.png">
      <p id="score">${film.rt_score}</p>
      <h2>${film.title}</h2>
      <p>${film.release_date}</p>
      </div>`
 }

 export function sortBy (films) {
  return films.sort(function(a,b){
    return b.rt_score - a.rt_score
  })
 }

 export function sortAz (films) {
  return films.sort((a,b) => {
    if (a.title > b.title) {return 1}
    if (a.title < b.title) {return -1}
    return 0;
  });
 }

 export function sortZa (films) {
  return films.sort((a,b) => {
    if (a.title > b.title) {return -1}
    if (a.title < b.title) {return 1}
    return 0;
  });
 }

 export function sortLessOld (films) {
  return films.sort(function(a,b){
    return b.release_date - a.release_date
  })
 }
 
 export function sortOldest (films) {
  return films.sort(function(a,b){
    return a.release_date - b.release_date
  })
 }

 
 
