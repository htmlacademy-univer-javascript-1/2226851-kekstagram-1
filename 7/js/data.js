import {getRandomInt, getRandomArrayElement, getRandomId} from './util.js';

const PHOTOS_NUM = 25;
const LIKES = {min: 15, max: 200};
const ARRAY_ID = Array(PHOTOS_NUM).fill(false);
const ARRAY_URL = Array(PHOTOS_NUM).fill(false);
const NUM_OF_COMMENTS = 3;
const MAX_ID = 25;

const DESCRIPTIONS = [
  'Рождена, чтобы сиять, как бриллиант.',
  'О паиньках не пишут книги.',
  'На тот случай, если вы забыли, как я выгляжу.',
  'Грустить лучше в мерседесе…',
  'Я не обычная, я эксклюзивная!',
  'И никто не догадывался, что на самом деле творится у нее на душе.',
  'Недостатков не имею. Только спецэффекты!',
  'Предупреждение: на этом фото вы можете влюбиться в меня.',
  'Она была радуга, а он дальтоник.'
];

const NAMES = [
  'Марина',
  'Алена',
  'Александра',
  'Виктория',
  'Ангелина',
  'Мария',
  'Вера',
  'Любовь',
  'Надежда',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const createComment = () => ({
  id: getRandomInt(1, 10000),
  avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES)
});

const createDescription = () => ({
  id: getRandomId(ARRAY_ID),
  url: `photos/${getRandomId(ARRAY_URL, 1, MAX_ID)}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInt(LIKES.min, LIKES.max),
  comments: Array.from({length: NUM_OF_COMMENTS}, createComment)
});

const createDescriptions = () => Array.from({length: PHOTOS_NUM}, createDescription);

export {createDescriptions};
