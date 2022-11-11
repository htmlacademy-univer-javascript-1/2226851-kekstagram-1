//случайное целое число из переданного диапазона включительно
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

//проверка максимальной длины строки
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

export {getRandomInt, maxString, getRandomArrayElement, getRandomId};
