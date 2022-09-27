//Функция, возвращающая случайное целое число из переданного диапазона включительно
function getRandom(from, to) {
  if (from >= to) {
    throw new Error('The value of "to" is less than or equal to the value of "from".');
  } else if (from < 0 || to < 0) {
    throw new Error('The range cannot be negative.');
  } else {
    const min = Math.ceil(from);
    const max = Math.floor(to);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

//Функция для проверки максимальной длины строки
function maxString(str, maxLength) {
  return maxLength >= str.length;
}

getRandom(0, 1000);
maxString('Textstring', 20);
