import { renderMostPopular, renderTopRated } from '../modules/movies_ui.js';
import './style.css';

window.load = renderTopRated();
window.load = renderMostPopular();
const comment = document.querySelectorAll('.comment');
document.addEventListener('click', (e) => {
    console.log(e.target.dataset)
})