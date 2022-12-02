import { isEscapeKey } from './util.js';

const STEP = 5;
const DEFAULT_COMMENTS = 5;
const fullSizePicture = document.querySelector('.big-picture');
const fullSizePictureImg = fullSizePicture.querySelector('.big-picture__img img');
const fullSizePictureCloseBtn = fullSizePicture.querySelector('.big-picture__cancel');
const fullSizePictureCommentsList = fullSizePicture.querySelector('.social__comments');
const fullSizePictureCommentsLoaderBtn = fullSizePicture.querySelector('.comments-loader');
const fullSizePictureCounterComments = fullSizePicture.querySelector('.social__comment-count');
const fullSizePictureCaption = fullSizePicture.querySelector('.social__caption');
const fullSizePictureLike = fullSizePicture.querySelector('.likes-count');

const commentTemplate = ({avatar, message, name}) => `<li class="social__comment">
  <img class="social__picture" src="${avatar}" alt="${name}" width="35" height="35">
  <p class="social__text">${message}</p>
</li>`;

let countComments = DEFAULT_COMMENTS;
let actualComments = [];

const counterCommTemplate = (commentsCount) => `${Math.min(countComments, commentsCount)} из <span class="comments-count">${commentsCount}</span> комментариев`;

const counterComments = () => {
  fullSizePictureCounterComments.innerHTML='';
  fullSizePictureCounterComments.insertAdjacentHTML('afterbegin', counterCommTemplate(actualComments.length));
};

const renderComments = () => {
  counterComments();

  fullSizePictureCommentsList.innerHTML='';
  const commentsTemplate = actualComments.slice(0, countComments).map((comment) => commentTemplate(comment)).join('');
  fullSizePictureCommentsList.insertAdjacentHTML('afterbegin', commentsTemplate);

  if (countComments >= actualComments.length) {
    fullSizePictureCommentsLoaderBtn.removeEventListener('click', fullSizePictureCommLoaderBtnClick);
    fullSizePictureCommentsLoaderBtn.classList.add('hidden');
  }
};

const initComments = ({comments}) => {
  actualComments = comments.slice();
  fullSizePictureCommentsList.innerHTML='';
  renderComments();
  fullSizePictureCommentsLoaderBtn.addEventListener('click', fullSizePictureCommLoaderBtnClick);
};

const closeFullSizePicture = () => {
  document.body.classList.remove('modal-open');
  fullSizePicture.classList.add('hidden');
  fullSizePictureCloseBtn.removeEventListener('click', fullSizePictureCloseBtnClick);
  window.removeEventListener('keydown', escKeydown);
  fullSizePictureCommentsLoaderBtn.classList.remove('hidden');
  fullSizePictureCommentsLoaderBtn.removeEventListener('click', fullSizePictureCommLoaderBtnClick);
  countComments = DEFAULT_COMMENTS;
};

function fullSizePictureCloseBtnClick() {
  closeFullSizePicture();
}

function escKeydown(evt) {
  if(isEscapeKey(evt)) {
    closeFullSizePicture();
    document.removeEventListener('keydown', escKeydown);
  }
}

function fullSizePictureCommLoaderBtnClick() {
  countComments += STEP;
  renderComments();
}

const openFullSizePicture = (photo) => {
  document.body.classList.add('modal-open');
  fullSizePicture.classList.remove('hidden');

  fullSizePictureImg.setAttribute('src', photo.url);
  fullSizePictureCaption.textContent = photo.description;
  fullSizePictureLike.textContent = photo.likes;

  initComments(photo);

  fullSizePictureCloseBtn.addEventListener('click', fullSizePictureCloseBtnClick);
  window.addEventListener('keydown', escKeydown);
};

export { openFullSizePicture };
