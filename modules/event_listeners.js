import LikesService from './likes_service';
import createPopUp from './popup_ui';
import CommentService from './comment__service.js';

let savedId = '';

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
  savedId = data.target.id;
  createPopUp(data.target.id);
  popup.style.display = 'block';
};
const togglePopup = document.querySelector('.toggle');
togglePopup.addEventListener('click', () => {
  popup.style.display = 'none';
});
const handleSubmit = () => {
  const frm = document.getElementById('frm');
  frm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name');
    const comment = document.getElementById('insist');
    const data = {
      item_id: savedId,
      username: name.value,
      comment: comment.value,
    };
    if (name.value !== '' && comment.value !== '' && savedId !== '') {
      CommentService.postComments(data);
      name.value = '';
      comment.value = '';
    }
  });
};

export { handleComment, handleLike, handleSubmit };
