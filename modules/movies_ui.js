import configureListener from './configure_listeners.js';
// import handleLike from './event_listeners';
import { handleComment, handleLike, handleSubmit } from './event_listeners.js';

import { toJson } from './json_helper.js';
import LikesService from './likes_service.js';
// import Movie from './movie';
import MovieService from './movie_service.js';

export const topRatedSection = document.querySelector('.top-rated');
const popularSection = document.querySelector('.popular');

/**
 *
 * @param {Movie} movie
 *
 */
const createMovieCard = (movie) => {
  const tmp = document.createElement('tmp');
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
      <button class="comment-btn" id=${movie.id}> Comments </button>
      <article class="like-btn" ><span  id=${movie.id} class="fa-regular fa-heart"></span> <span class="likes-count">${LikesService.getOneItemLikes(movie.id)}</span></article>

    </div>
  </article>`;

  /*
  1- Each html element has query selector function so you can get any element inside it
  2- you cann pass functions as arguments.
  3- Ex: we have like-button element inside that temp.
  4- we can get that button from the temp becauze it its parent
  */
  // configureListener(tmp, handleSubmit, { childClassName: '.button1' });

  configureListener(tmp, handleComment, { childClassName: '.comment-btn' });

  configureListener(tmp, handleLike, { childClassName: '.like-btn' });
  // configureListener(tmp, handlePopup, { childClassName: '.comment-btn' });



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
