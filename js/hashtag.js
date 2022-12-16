const MAX_HASHTAGS_LENGTH = 20;
const MAX_HASHTAGS_COUNT = 5;

const uploadForm = document.querySelector('.img-upload__form');
const inputHashtag = uploadForm.querySelector('.text__hashtags');
const submitButton = uploadForm.querySelector('#upload-submit');
let errorMessage = '';

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__item--invalid',
  successClass: 'img-upload__item--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'img-upload__error'
});

const error = () => errorMessage;

const hashtagErrorHandler = (value) => {
  errorMessage = '';
  const hashtagInputText = value.toLowerCase().trim();
  if(hashtagInputText.length === 0){
    return true;
  }

  const hashtagTexts = hashtagInputText.split(/\s+/);
  if(hashtagTexts.length === 0) {
    return true;
  }

  const requirements = [
    {
      check: hashtagTexts.some((item) => item.indexOf('#', 1) > 0),
      error: 'Хэш-теги разделяются пробелами'
    },
    {
      check: hashtagTexts.some((item) => item[0] !== '#'),
      error: 'Хэш-тег начинается с символа #'
    },
    {
      check: hashtagTexts.some((item) => item.length === 1 || item[0] !== '#'),
      error: 'Хеш-тег не может состоять только из одной решётки'
    },
    {
      check: hashtagTexts.some((item) => item.length > MAX_HASHTAGS_LENGTH),
      error: `Длина хеш-тега превышает ${MAX_HASHTAGS_LENGTH} символов`
    },
    {
      check: hashtagTexts.some((item, index, array) => array.indexOf(item, index + 1) > index),
      error: 'Один и тот же хэш-тег не может быть использован дважды'
    },
    {
      check: hashtagTexts.some((item) => !/^#[0-9а-яёa-z]{1,19}$/i.test(item)),
      error: 'Хеш-тег содержит недопустимые символы'
    },
    {
      check: hashtagTexts.length > MAX_HASHTAGS_COUNT,
      error: `Нельзя указывать больше ${MAX_HASHTAGS_COUNT} хэш-тегов`
    }
  ];

  return requirements.every((rule) => {
    const isValid = !rule.check;
    if(!isValid){
      errorMessage = rule.error;
    }
    return isValid;
  });
};

pristine.addValidator(inputHashtag, hashtagErrorHandler, error, 2, false);

const onHashtagInput = () => {
  submitButton.disabled = !pristine.validate();
};

const uploadHashtagInput = () => {
  inputHashtag.addEventListener('input', onHashtagInput);
};

const checkValidation = () => pristine.validate();

const clearHashtagsField = () => {
  inputHashtag.value = '';
  pristine.validate();
};

export {uploadHashtagInput, clearHashtagsField, checkValidation};
