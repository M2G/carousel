import Carousel from './js/carousel';
import './index.scss';

const elem = document.getElementById('app');

if (elem) Carousel.create(elem, []);
