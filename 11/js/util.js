const ERROR_Z_POSITION = 100;
const ERROR_FONT_SIZE = 20;
const ERROR_VERTICAL_PADDING = 10;
const ERROR_HORIZONTAL_PADDING = 50;

const isEscapeKey = (evt) => evt.key === 'Escape';

const getRandomInt = (from, to) => {
  if (from >= to){
    throw new Error('The value of "to" is less than or equal to the value of "from".');
  }

  if (from < 0 || to < 0) {
    throw new Error('The range cannot be negative.');
  }

  const min = Math.ceil(from);
  const max = Math.floor(to);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const maxString = (value, maxLength) => maxLength >= value.length;

const getRandomArrayElement = (elements) => elements[getRandomInt(0, elements.length - 1)];

const getRandomId = (arrayOfNum) => {
  for (let i = 0; i < arrayOfNum.length; i++) {
    if (!arrayOfNum[i]) {
      arrayOfNum[i] = true;
      return i + 1;
    }
  }
};

const showAlert = (errorText) => {
  const alertContainer = document.createElement('div');

  alertContainer.style.zIndex = ERROR_Z_POSITION;
  alertContainer.style.backgroundColor = '#9C281B';
  alertContainer.style.fontSize = `${ERROR_FONT_SIZE}px`;
  alertContainer.style.textAlign = 'center';
  alertContainer.style.padding = `${ERROR_VERTICAL_PADDING}px ${ERROR_HORIZONTAL_PADDING}px`;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.right = 0;
  alertContainer.style.top = 0;
  alertContainer.textContent = errorText;
  document.body.append(alertContainer);
};

export {getRandomInt, maxString, getRandomArrayElement, getRandomId, isEscapeKey, showAlert};
