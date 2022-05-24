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
      const element = document.createElement("img");
      
      element.src = movie.image;
      console.log(element);
      setTimeout(() => {
        topRatedSection.appendChild(element);
      }, 500 * i)

    });
} 