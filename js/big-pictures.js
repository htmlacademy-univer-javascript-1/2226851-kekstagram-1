const fullSizePicture = document.querySelector('.big-picture');
const close = document.querySelector('.big-picture__cancel');
const commentListElement = document.querySelector('.social__comments');
const commentsFragment = document.createDocumentFragment();

const renderComments  = (comments) => {
  comments.forEach((comment) => {
    const socialComment = document.querySelector('.social__comment').cloneNode(true);
    socialComment.querySelector('.social__picture').src = comment.avatar;
    socialComment.querySelector('.social__picture').alt = comment.name;
    socialComment.querySelector('.social__text').textContent = comment.message;
    commentsFragment.appendChild(socialComment);
  });

  commentListElement.innerHTML = '';
  commentListElement.appendChild(commentsFragment);
};

const renderPicture = (picture) => {
  fullSizePicture.querySelector('.social__comment-count').classList.add('hidden');
  fullSizePicture.querySelector('.comments-loader').classList.add('hidden');
  fullSizePicture.querySelector('.big-picture__img img').src = picture.url;
  fullSizePicture.querySelector('.likes-count').textContent = picture.likes;
  fullSizePicture.querySelector('.social__caption').textContent = picture.description;
  fullSizePicture.querySelector('.comments-count').textContent = picture.comments.length;
  renderComments(picture.comments);
};

const closePicture = () => {
  fullSizePicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

const escKeydown = (evt) => {
  if(evt.key === 'Escape') {
    closePicture();
    document.removeEventListener('keydown', escKeydown);
  }
};

const closeButton = () => {
  closePicture();
  close.removeEventListener('click', closeButton);
  document.removeEventListener('keydown', escKeydown);
};

const openFullSizePicture = (item) => {
  document.body.classList.add('modal-open');
  fullSizePicture.classList.remove('hidden');
  renderPicture(item);
  close.addEventListener('click', closeButton);
  document.addEventListener('keydown', escKeydown);
};

export { openFullSizePicture };
