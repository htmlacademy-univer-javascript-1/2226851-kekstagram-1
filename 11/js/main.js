import { renderingPictures } from './rendering.js';
import { uploadForm } from './form-upload.js';
import { setData } from './api.js';
import { showAlert } from './util.js';

setData(renderingPictures,
  () => {
    showAlert('Не удалось загрузить фото');
  },
  'GET');

uploadForm();
