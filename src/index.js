import LikesService from '../modules/likes_service.js';
import { renderMostPopular, renderTopRated } from '../modules/movies_ui.js';
import './style.css';

const call = async () => {
  await LikesService.getItemLikes();
  renderTopRated();
  renderMostPopular();
};

// const frm = document.getElementById('frm');
// frm.addEventListener('submit', (event) => {
//   event.preventDefault();
//   const name = document.getElementById('name');
//   const comment = document.getElementById('insist');
//   const data = {
//     name: name.value,
//     comment: comment.value,
//   };
//   handleComment(data);
// });

window.load = call();
