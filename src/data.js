export function showFilms(dataFilms) {
  const filmCards = document.getElementById("filmCards") //<-- Llamando al contenedor de html
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

 export function sortBy(dataFilms){
  const popularity = dataFilms.sort(function(a,b) {
  return b.rt_score - a.rt_score
    });
 }
 console.log(sortBy)