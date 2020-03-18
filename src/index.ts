import Carousel from './js/carousel';
import './index.scss';

const CONSTANTS = {
  attrName: 'data-app',
};

const elem = document.querySelector(`[${CONSTANTS.attrName}]`);

if (elem) Carousel.init(elem, []);
