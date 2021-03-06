import configureListener from './configure_listeners.js';
import { handleComment, handleLike } from './event_listeners.js';

import { toJson } from './json_helper.js';
import LikesService from './likes_service.js';
import MovieService from './movie_service.js';

export const topRatedSection = document.querySelector('.top-rated');
const popularSection = document.querySelector('.popular');

const createMovieCard = (movie) => {
  const tmp = document.createElement('tmp');
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

    <div class="movie-interaction id=${movie.id}">
  <article class="comment-btn" id=${movie.id}> <span class="fa-solid fa-comment" id=${movie.id}></span></article>
      <article class="like-btn" ><span  id=${movie.id} class="fa-regular fa-heart"></span> <span class="likes-count">${LikesService.getOneItemLikes(movie.id)}</span></article>
    </div>
  </article>`;

  configureListener(tmp, handleComment, { childClassName: '.comment-btn' });

  configureListener(tmp, handleLike, { childClassName: '.like-btn' });

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
