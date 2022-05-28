import LikesService from './likes_service';
import createPopUp from './popup_ui';

const popup = document.querySelector('.comment__popup');

/**
 *
 * @param {Event} event
 */
const handleLike = async (event) => {
  /**
   * @type {HTMLElement}
   */
  const targetElement = event.target;
  const numberElement = targetElement.nextElementSibling;
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
  createPopUp(data.target.id);
  popup.style.display = 'block';
};
const togglePopup = document.querySelector('.toggle');
togglePopup.addEventListener('click', () => {
  popup.style.display = 'none';
});

export { handleComment, handleLike };
