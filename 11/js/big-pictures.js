import { isEscapeKey } from './util.js';
import { setComments } from './comments.js';

const bigPicture = document.querySelector('.big-picture');
const closeButton = bigPicture.querySelector('#picture-cancel');

const clearBigPictureMenu = () => {
  bigPicture.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
};

const onEscKeydown = (evt) => {
  if(isEscapeKey(evt)){
    clearBigPictureMenu();
    document.removeEventListener('keydown', onEscKeydown);
  }
};

closeButton.addEventListener('click', () => {
  clearBigPictureMenu();
  document.removeEventListener('keydown', onEscKeydown);
});

const openFullSizePicture = (data) => {
  document.addEventListener('keydown', onEscKeydown);
  bigPicture.classList.remove('hidden');
  bigPicture.querySelector('.big-picture__img').querySelector('img').src = data.url;
  bigPicture.querySelector('.likes-count').textContent = data.likes;
  bigPicture.querySelector('.social__caption').textContent = data.description;
  setComments(data.comments);
  document.querySelector('body').classList.add('modal-open');
};

export {openFullSizePicture};
