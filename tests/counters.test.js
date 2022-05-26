/**
 * @jest-environment jsdom
 */

import Movie from "../modules/movie";
import MovieService from "../modules/movie_service";

it("Top rated Should return count of 2", () => {
  // arrrange
 const movie =  new Movie(1,"title",8,"image","overview","date")

   // act
  for(let i = 0; i < 2; i +=1) {
    MovieService.topRatedMovies.push(movie)
  }

  //assert

  expect(MovieService.countTopRated()).toBe(2);

})


it("Most Popular rated Should return count of 2", () => {
  // arrrange
 const movie =  new Movie(1,"title",8,"image","overview","date")

   // act
  for(let i = 0; i < 2; i +=1) {
    MovieService.popularMovies.push(movie)
  }

  //assert

  expect(MovieService.countMostPopular()).toBe(2);

})