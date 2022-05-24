import Movie from "./movie";
import MovieService from "./movie_service";

export const topRatedSection = document.querySelector(".top-rated");

export const renderTopRated = async () => {
    await MovieService.getTopRated();
  
     /** @type {Array<Movie>} */ 
    const topRated = MovieService.topRatedMovies;
    let i = 0;
    topRated.forEach(movie => {
      i+=1
      const tmp = document.createElement("tmp");
      tmp.innerHTML = `<article class="movie-container" data=${movie.id}">
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
          <p>  like </p>
        </div>
      </article>`
      
      setTimeout(() => {
        topRatedSection.appendChild(tmp.firstChild);
      }, 300 * i)

    });
} 