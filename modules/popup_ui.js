import MovieService from './movie_service';
import CommentService from './comment__service';
import getElement from './get_element';

const createPopUp = (movieiId) => {
  const id = Number(movieiId);
  CommentService.getItemComments(id);

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

            </ul>
            <form id="frm">
                <label for="name"><input type="text" id="name" placeholder="Your names"></label>
                <label for="insist"><textarea id="insist" placeholder="Your insist"></textarea></label>
              <label for="button"><button id="button" class="button1" type="submit">Comment</button></label> 
            </form>
        </div>`;

  const getList = getElement(singlleMovie, '.comment__list');
  const comments = Array.from(CommentService.commentItems);
  comments.forEach((el) => {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const span1 = document.createElement('span');
    const span2 = document.createElement('span');
    span.innerHTML = `${el.creation_date}`;
    span1.innerHTML = `${`${el.username}: `}`;
    span1.style.fontWeight = 'bold';
    span2.innerHTML = `${el.comment}`;
    li.appendChild(span);
    li.appendChild(span1);
    li.appendChild(span2);
    getList.appendChild(li);
  });

  console.log(CommentService.commentCounter(), 'Countng');
};

export default createPopUp;