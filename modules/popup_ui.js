import MovieService from './movie_service';
import CommentService from './comment__service';
import getElement from './get_element';
import commentSize from './comentSize';
import configureListener from './configure_listeners';
import createComment from './create_comment';
import handleSubmit from './handle_form';

const createPopUp = async (movieiId) => {
  const singlleMovie = document.getElementById('single-movie-data');
  singlleMovie.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
  const id = Number(movieiId);
  const allMovies = [...MovieService.popularMovies, ...MovieService.topRatedMovies];
  const foundMovie = allMovies.find((item) => item.id === id);
  await CommentService.getItemComments(id);

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
            <h3> Comments: (<span id="cnter"></span>) </h3>
            
            <ul class="comment__list">

            </ul>
            <form  class="form" data=${movieiId} action="#">
                <label for="name"><input type="text" id="name" name="name" placeholder="Your names"></label>
                <label for="insist"><textarea id="insist" name="comment" placeholder="Your insist"></textarea></label>
              <label for="button"><button id="button" class="button1" type="submit">Comment</button></label> 
            </form>
        </div>`;

  configureListener(singlleMovie, handleSubmit, { eventType: 'submit', childClassName: '.form' });
  const getList = getElement(singlleMovie, '.comment__list');
  const comments = Array.from(CommentService.commentItems);
  console.log(comments);
  const cter = document.getElementById('cnter');
  cter.innerHTML = commentSize(comments);
  comments.forEach((el) => {
    const li = createComment(el);

    getList.appendChild(li);
  });
};

export default createPopUp;