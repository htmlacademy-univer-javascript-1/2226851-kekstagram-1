import {createDescriptions} from './data.js';
import {renderingPictures} from './rendering.js';

const descriptions = createDescriptions();
// eslint-disable-next-line no-console
console.log(descriptions);
renderingPictures(descriptions);
