const Scale = {
  STEP: 25,
  MAX_VALUE: 100,
  MIN_VALUE: 25
};

const uploadingOverlay = document.querySelector('.img-upload__overlay');
const uploadingPicture = uploadingOverlay.querySelector('.img-upload__preview').querySelector('img');
const scale = uploadingOverlay.querySelector('.img-upload__scale');
const scaleCounter = scale.querySelector('.scale__control--value');

const changeScale = (scaleCoefficient) => {
  let scaleNumber = Number(scaleCounter.value.replace('%', '')) + scaleCoefficient * Scale.STEP;

  if(scaleNumber < Scale.MIN_VALUE) {
    scaleNumber = Scale.MIN_VALUE;
  }
  else if (scaleNumber > Scale.MAX_VALUE) {
    scaleNumber = Scale.MAX_VALUE;
  }

  scaleCounter.value = `${scaleNumber}%`;
  uploadingPicture.style.transform = `scale(${scaleNumber / 100})`;
};

const onScaleButtonClick = (evt) => {
  if(evt.target.matches('button')) {
    let coeff = 1;
    if(evt.target.matches('.scale__control--smaller')) {
      coeff = -1;
    }

    changeScale(coeff);
  }
};

const scalingPhotos = () => {
  scaleCounter.value = `${Scale.MAX_VALUE}%`;
  uploadingPicture.style.transform = `scale(${Scale.MAX_VALUE / 100})`;
};

scale.addEventListener('click', onScaleButtonClick);

export{scalingPhotos};
