import LikesService from '../modules/likes_service.js';
import { renderMostPopular, renderTopRated } from '../modules/movies_ui.js';
import './style.css';


window.onload = LikesService.getItemLikes()
window.load = renderTopRated();
window.load = renderMostPopular();
