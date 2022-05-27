import CommentService from './comment__service.js';
import createComment from './create_comment';

const handleSubmit = (event) => {
  event.preventDefault();
  /**
   * @type {HTMLFormElement}
   */
  const form = event.target;
  const name = form.elements.name.value;
  const comment = form.elements.comment.value;
  const savedId = form.getAttribute('data');

  if (name !== '' && comment !== '' && savedId !== '') {
    const data = {
      item_id: savedId,
      username: name,
      comment,
    };
    form.previousElementSibling.appendChild(createComment({ creation_date: '1s Ago', username: name, comment }));
    CommentService.postComments(data);
    form.elements.name.value = '';
    form.elements.comment.value = '';
  }
};

export default handleSubmit;