import { toJson } from "./json_helper";
import Movie from "./movie";
import MovieService from "./movie_service";

export const topRatedSection = document.querySelector(".top-rated");
const popularSection = document.querySelector(".popular");

/**
 *
 * @param {Movie} movie
 *
 */
const createMovieCard = (movie) => {
  const tmp = document.createElement("tmp");
  // Check the data attribute you will use it to create the popup, retrieve it back with fromJson
  tmp.innerHTML = `<article class="movie-container" data=${toJson(movie)}">
    <div class="movie-card">
    <img src="${movie.image}" alt="${movie.title}">
    <div class="movie-data">
      <p class="title"> ${movie.title} </p>
      <div class="rate-wrapper">
      <span class = "fa fa-star checked"></span>  
      <p class="rate"> ${movie.rate} </p>

    </div>
    </div>

    <div class="movie-interaction">
      <button> Comments </button>
      <button class="like-btn" id=${movie.id}><span class="fa-regular fa-heart"></span> <span class="likes-count">0</span></button>

    </div>
  </article>`;
  return tmp;
};
/**
 *
 * @param {Array<Movie>} movies
 * @param {HTMLElement} section
 */
const moviesIterator = (movies, section) => {
  /** @type {Array<Movie>} */
  let i = 0;
  movies.forEach((movie) => {
    i += 1;
    const temp = createMovieCard(movie);

    setTimeout(() => {
      section.appendChild(temp.firstChild);
    }, 300 * i);
  });
};
export const renderTopRated = async () => {
  await MovieService.getTopRated();
  const topRated = MovieService.topRatedMovies;
  moviesIterator(topRated, topRatedSection);
};
export const renderMostPopular = async () => {
  await MovieService.getPopularMovies();
  const popular = MovieService.popularMovies;
  moviesIterator(popular, popularSection);
};
