import {createDescriptions} from './data.js';
import {renderingPictures} from './rendering.js';
import './userForm.js';

const descriptions = createDescriptions();
renderingPictures(descriptions);
