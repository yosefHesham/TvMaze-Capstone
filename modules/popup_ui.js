import MovieService from './movie_service';

const createPopUp = (movieiId) => {
  const id = Number(movieiId);
  // /** @type {Array} */
  const allMovies = [...MovieService.popularMovies, ...MovieService.topRatedMovies];

  /**
   * @type {Movie}
   */
  const foundMovie = allMovies.find((item) => item.id === id);

  const singlleMovie = document.getElementById('single-movie-data');
  singlleMovie.innerHTML = `
<div class="popup__card">
            <img src="${foundMovie.image}" alt="single image">
        </div>
        <div class="movie__data">
            <h1 class="movie__header">${foundMovie.title}</h1>
            <div class="movie__data-details">
                <p><b>Date:</b> ${foundMovie.date}</p>
                <p><b>Rate:</b> ${foundMovie.rate}</p>
            </div>
            <section class="overview">
              <h3> Overview  </h3>
              <p>  ${foundMovie.overview} </p>
            </section>
            <ul class="comment__list">
                <li><span>01/01/2020</span> 
                    <span><b>Pascal</b></span>
                    <span><b>Ii is so terible</b></span>
                </li>
                <li><span>01/01/2020 </span> 
                    <span><b>Pascal: </b></span>
                    <span><b>It is romantic and lovely</b></span>
                </li>

            </ul>
            <form id="frm">
                <label for="name"><input type="text" id="name" placeholder="Your names"></label>
                <label for="insist"><textarea id="insist" placeholder="Your insist"></textarea></label>
              <label for="button"><button id="button" class="button1" type="submit">Comment</button></label> 
            </form>
        </div>`;
};

export default createPopUp;