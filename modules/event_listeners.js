import LikesService from './likes_service';
import createPopUp from './popup_ui';
import CommentService from './comment__service.js';
import createComment from './create_comment';

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
  console.log(data.target);
  savedId = data.target.id;
  createPopUp(data.target.id);
  popup.style.display = 'block';
};
const togglePopup = document.querySelector('.toggle');
togglePopup.addEventListener('click', () => {
  popup.style.display = 'none';
});


const handleSubmit = (event) => {
  event.preventDefault();
  /**
   * @type {HTMLFormElement}
   */
  const form = event.target;
    const name = form.elements.name.value
    const comment = form.elements.comment.value;
   
    if (name !== '' && comment !== '' && savedId !== '') {
      const data = {
        item_id: savedId,
        username: name,
        comment: comment,
      };
      form.previousElementSibling.appendChild(createComment({creation_date:"1s Ago",username:name,comment:comment}))
      CommentService.postComments(data);
      form.elements.name.value = '';
      form.elements.comment.value = '';
    }
  
};

export { handleComment, handleLike, handleSubmit };
