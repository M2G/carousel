import Carousel from './carousel';

const CONSTANTS = {
  attrName: 'data-app'
};

const elem = document.querySelector(`[${CONSTANTS.attrName}]`);

if (elem) Carousel.init(elem, []);
