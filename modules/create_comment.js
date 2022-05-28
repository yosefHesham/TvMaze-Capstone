const createComment = (el) => {
  const li = document.createElement('li');
  li.innerHTML = `<span>(${el.creation_date})</span>
    <span>${el.username} said: </span>
    <span>${el.comment}</span>
    `;
  return li;
};

export default createComment;