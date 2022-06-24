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

 export function sortAz (films) {
  return films.sort((a,b) => {
    if (a.title > b.title) {return -1}
    if (a.title < b.title) {return 1}
    return 0;

  });
 }

 
 
