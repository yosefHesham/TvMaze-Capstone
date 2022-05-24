class Movie {
  constructor(movie) {
    this.id = movie['id'];
    this.title = movie['title'];
    this.rate = movie['vote_average'];
    this.image = `https://image.tmdb.org/t/p/w500${movie['poster_path']}`
    this.overview = movie['overview']
    this.date= movie['release_date'];
  }
}

export default Movie