import MovieService from '../modules/movie_service';
import './style.css';


window.load = MovieService.getTopRated();
window.load = MovieService.getPopularMovies()