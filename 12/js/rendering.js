import { openFullSizePicture } from './big-pictures.js';

const pictureListElement = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content;
const pictureTemplate2 = pictureTemplate.querySelector('.picture');
const pictureFragment = document.createDocumentFragment();

const renderingPictures = (pictures) => {
  pictures.forEach((picture) => {
    const pictureElement = pictureTemplate2.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = picture.url;
    pictureElement.querySelector('.picture__likes').textContent = picture.likes;
    pictureElement.querySelector('.picture__comments').textContent = picture.comments.length;
    pictureElement.addEventListener('click', () => {
      openFullSizePicture(picture);
    });
    pictureFragment.appendChild(pictureElement);
  });
  pictureListElement.appendChild(pictureFragment);
};

const removingPictures = () => {
  const oldPictures = pictureListElement.querySelectorAll('.picture');
  oldPictures.forEach((picture) => {
    picture.remove();
  });
};

export {renderingPictures, removingPictures};
