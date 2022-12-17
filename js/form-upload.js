import { uploadHashtagInput, clearHashtagsField, checkValidation } from './hashtag.js';
import { isEscapeKey } from './util.js';
import { scalingPhotos } from './image-scale.js';
import { setEffects } from './effect.js';
import { setData } from './api.js';
import { addPostMessages, showSuccessMessage, closeMessage, showErrorMessage } from './post-message.js';
import { uploadFile} from './file-upload.js';

const form = document.querySelector('.img-upload__form');
const uploadingControl = form.querySelector('#upload-file');
const pictureWindow = form.querySelector('.img-upload__overlay');
const closeButton = form.querySelector('#upload-cancel');
const uploadingComments = pictureWindow.querySelector('.text__description');
const uploadingButton = pictureWindow.querySelector('#upload-submit');

const clearForm = () => {
  pictureWindow.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  uploadingControl.value = '';
  clearHashtagsField();
  uploadingComments.value = '';
  closeMessage();
  uploadingButton.disabled = false;
};

const onEscapeKeydown = (evt) => {
  if(isEscapeKey(evt) && !evt.target.classList.contains('text__hashtags') && !evt.target.classList.contains('text__description')) {
    clearForm();
    document.removeEventListener('keydown', onEscapeKeydown);
  }
};

const closeForm = () => {
  clearForm();

  document.removeEventListener('keydown', onEscapeKeydown);
};

closeButton.addEventListener('click', closeForm);

const onUploadClick = () => {
  document.addEventListener('keydown', onEscapeKeydown);
  uploadFile(uploadingControl.files[0]);
  pictureWindow.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  scalingPhotos();
  setEffects();
  uploadHashtagInput();
};

const uploadForm = () => {
  uploadingControl.addEventListener('change', onUploadClick);
  addPostMessages();
};

const onFormSubmit = (evt) => {
  evt.preventDefault();

  if(checkValidation()) {
    setData(showSuccessMessage, showErrorMessage, 'POST', new FormData(form));
  }
};

form.addEventListener('submit', onFormSubmit);

export{uploadForm, closeForm, onEscapeKeydown};
