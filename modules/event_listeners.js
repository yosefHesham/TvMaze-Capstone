import LikesService from './likes_service';
import CommentService from './comment__service';
import Movie from './movie';
import { fromJson } from './json_helper';
import MovieService from './movie_service';

/**
 *
 * @param {Event} event
 */


const handleLike = async (event) => {
  /**
   * @type {HTMLElement}
   */
  const targetElement = event.target;
  console.log(targetElement.id);
  const numberElement = targetElement.nextElementSibling;
  console.log(numberElement);
  if (targetElement.classList.contains('fa-regular')) {
    targetElement.classList.remove('fa-regular');
    targetElement.classList.add('fa-solid');
    numberElement.innerHTML = Number(numberElement.innerHTML) + 1;
    LikesService.postItemLikes(Number(targetElement.id));
  } else {
    targetElement.classList.remove('fa-solid');
    targetElement.classList.add('fa-regular');
    numberElement.innerHTML = Number(numberElement.innerHTML) - 1;
  }
};
/** @param {Event} data */
const handleComment = (data) => {
  const id = Number(data.target.id);
  // /** @type {Array} */
  let allMovies = [...MovieService.popularMovies, ...MovieService.topRatedMovies];
  let foundMovie = allMovies.find(item => item.id === id);
  console.log(foundMovie)

  let singlleMovie = document.getElementById('single-movie-data');
  singlleMovie.innerHTML = `
<div class="popup__card">
            <img src="https://image.tmdb.org/t/p/w200/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg" alt="single image">
        </div>
        <div class="movie__data">
            <h1 class="movie__header">Space 3</h1>
            <div class="movie__data-details">
                <p><b>Date:</b> 01/03/2020</p>
                <p><b>Rate:</b> 8.5</p>
            </div>
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
        </div>

`


};
const handleSubmit = () => {
};

export { handleComment, handleLike, handleSubmit };
