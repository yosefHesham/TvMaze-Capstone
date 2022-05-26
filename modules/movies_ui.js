import configureListener from './configure_listeners.js';
// import handleLike from './event_listeners';
import { handleComment, handleLike, handleSubmit } from './event_listeners.js';

import { toJson } from './json_helper.js';
import LikesService from './likes_service.js';
// import Movie from './movie';
import MovieService from './movie_service.js';

export const topRatedSection = document.querySelector('.top-rated');
const popularSection = document.querySelector('.popular');

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
    <div class="comment-counter comment-btn" id=${movie.id}>
      <svg type="button" fill="rosybrown"  width="24"  height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 1c-6.338 0-12 4.226-12 10.007 0 2.05.739 4.063 2.047 5.625l-1.993 6.368 6.946-3c1.705.439 3.334.641 4.864.641 7.174 0 12.136-4.439 12.136-9.634 0-5.812-5.701-10.007-12-10.007zm0 1c6.065 0 11 4.041 11 9.007 0 4.922-4.787 8.634-11.136 8.634-1.881 0-3.401-.299-4.946-.695l-5.258 2.271 1.505-4.808c-1.308-1.564-2.165-3.128-2.165-5.402 0-4.966 4.935-9.007 11-9.007zm-5 7.5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm5 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm5 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z"/></svg><span>8</span></div>
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
  configureListener(tmp, handleSubmit, { childClassName: '.comment-btn' });

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
