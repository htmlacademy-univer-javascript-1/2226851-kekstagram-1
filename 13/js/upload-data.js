import { renderingPictures } from './rendering.js';
import {showFilters} from './filters.js';

const ERROR_Z_POSITION = 100;
const ERROR_FONT_SIZE = 20;
const ERROR_VERTICAL_PADDING = 10;
const ERROR_HORIZONTAL_PADDING = 50;

let pictures = [];

const onSuccess = (data) => {
  pictures = data.slice();
  renderingPictures(data);
  showFilters();
};

const showAlert = (errorText) => {
  const errorMessage = document.createElement('div');

  errorMessage.style.zIndex = ERROR_Z_POSITION;
  errorMessage.style.color = 'white';
  errorMessage.style.backgroundColor = '#9C281B';
  errorMessage.style.fontSize = `${ERROR_FONT_SIZE}px`;
  errorMessage.style.textAlign = 'center';
  errorMessage.style.padding = `${ERROR_VERTICAL_PADDING}px ${ERROR_HORIZONTAL_PADDING}px`;
  errorMessage.style.position = 'absolute';
  errorMessage.style.left = 0;
  errorMessage.style.right = 0;
  errorMessage.style.top = 0;

  errorMessage.textContent = errorText;

  document.body.append(errorMessage);
};

export{onSuccess, showAlert, pictures};
