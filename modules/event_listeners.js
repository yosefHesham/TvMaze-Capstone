import LikesService from './likes_service';
import CommentService from './comment__service';

/**
 *
 * @param {Event} event
 */
const handleLike = async (event) => {
  /**
   * @type {HTMLElement}
   */
  const targetElement = event.target;
  console.log(targetElement.id);
  const numberElement = targetElement.nextElementSibling;
  console.log(numberElement);
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

const handleComment = (data) => {
  const { id } = data.target;
  const frm = document.getElementById('frm');
  const name = document.getElementById('name');
  const comment = document.getElementById('insist');
  frm.addEventListener('submit', (event) => {
    event.preventDefault();
    const newComment = {
      item_id: id,
      username: name.value,
      comment: comment.value,
    };
    console.log(newComment);
    CommentService.postComments(newComment);
  });

  data.target.addEventListener('click', (e) => {
    const removepoped = document.getElementById('poped');
    console.log(e.target.id);
    removepoped.classList.remove('none');
  });
};
export { handleComment, handleLike };
