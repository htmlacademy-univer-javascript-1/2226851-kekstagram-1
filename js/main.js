import {createDescriptions} from './data.js';
import {renderingPictures} from './rendering.js';
import './userForm.js';
import './image-scale.js';
import './effect.js';

const descriptions = createDescriptions();
renderingPictures(descriptions);
