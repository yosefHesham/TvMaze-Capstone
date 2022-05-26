import showCounts from '../modules/counters_ui.js';
import LikesService from '../modules/likes_service.js';
import '../modules/mobile_menu.js';
import { renderMostPopular, renderTopRated } from '../modules/movies_ui.js';
import './style.css';

const call = async () => {
  await LikesService.getItemLikes();
  await renderTopRated();
  await renderMostPopular();
  showCounts();
};

window.load = call();

  