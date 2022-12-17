import {uploadForm} from './form-upload.js';
import {setData} from './api.js';
import {onSuccess, showAlert} from './upload-data.js';

setData(onSuccess,
  () => {
    showAlert('Не удалось загрузить фото');
  },
  'GET');

uploadForm();
