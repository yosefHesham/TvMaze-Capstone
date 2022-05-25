import LikesService from '../modules/likes_service.js';
import { renderMostPopular, renderTopRated } from '../modules/movies_ui.js';
import './style.css';

const call = async () => {
  await LikesService.getItemLikes();
  renderTopRated();
  renderMostPopular();
};

window.load = call();
window.load = renderTopRated();
window.load = renderMostPopular();
// const comment = document.querySelectorAll('.comment');
// document.addEventListener('click', (e) => {
//   console.log(e.target.dataset);
// });
window.load = renderMostPopular();
