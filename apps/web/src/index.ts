import Carousel from './carousel';
import './index.scss';

const elem = document.getElementById('app');

if (elem) Carousel.create(elem, []);
