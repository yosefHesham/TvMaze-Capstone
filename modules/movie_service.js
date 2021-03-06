import {
  API_KEY, BASEURL, POPULAR, TOP_RATED,
} from './api_helper';
import Movie from './movie';

class MovieService {
  static popularMovies = [];

  static topRatedMovies = []

  static getPopularMovies = async () => {
    let result = await fetch(`${BASEURL}/${POPULAR}?api_key=${API_KEY}`);
    result = await result.json();
    /** @type {Array} */
    const data = await result.results;
    this.popularMovies = data.map((movie) => new Movie(movie));
  }

  static getTopRated = async () => {
    let result = await fetch(`${BASEURL}/${TOP_RATED}?api_key=${API_KEY}&page=3`);
    result = await result.json();
    /** @type {Array} */
    const data = result.results;
    this.topRatedMovies = data.map((movie) => new Movie(movie));
  }

  static countTopRated = () => this.topRatedMovies.length

  static countMostPopular = () => this.popularMovies.length
}
export default MovieService;