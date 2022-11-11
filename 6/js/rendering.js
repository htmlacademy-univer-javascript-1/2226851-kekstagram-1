const pictureListElement = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content;
const pictureTemplate2 = pictureTemplate.querySelector('.picture');
const pictureFragment = document.createDocumentFragment();

const renderingImages = (pictures) => {
  pictures.forEach((picture) => {
    const pictureElement = pictureTemplate2.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = picture.url;
    pictureElement.querySelector('.picture__likes').textContent = picture.likes;
    pictureElement.querySelector('.picture__comments').textContent = picture.comments.length;
    pictureFragment.appendChild(pictureElement);
  });
  pictureListElement.appendChild(pictureFragment);
};

export {renderingImages};
