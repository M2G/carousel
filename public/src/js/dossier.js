import Component from './component';

  const _defaults = {
    duration: 200, // ms
    dist: -100, // zoom scale TODO: make this more intuitive as an option
    shift: 0, // spacing for center image
    padding: 0, // Padding between non center items
    numVisible: 5, // Number of visible items in carousel
    fullWidth: false, // Change to full width styles
    indicators: false, // Toggle indicators
    noWrap: false, // Don't wrap around and cycle through items.
    onCycleTo: null // Callback for when a new slide is cycled to.
  };

const CONSTANTS = {
  attrName: 'data-app'
};

const visibleClass = 'is-hidden';
const previous = 'prev';
const next = 'next';

class Carousel extends Component {
  constructor(elem) {
    this.elem = elem;

    this.carousel = this.elem.querySelector('[data-dossier-carousel]');
    this.intro = this.elem.querySelector('[data-dossier-intro]');
    this.nav = this.elem.querySelector('[data-dossier-navigation]');
    this.carousel.dataset.currentslide = 0;
    this.carousel.dataset.slidecount = this.carousel.querySelectorAll('.c-dossier__carousel__item').length;

    // intro
    this.intro.addEventListener('click', event => {
      event.preventDefault();
      if (event.target.matches('.c-btn')) {
        this.hideIntro();
        this.changeSlide(+this.carousel.dataset.currentslide);
        this.showCarousel();
      }
    });

    // nav
    this.nav.addEventListener('click', event => {
      if (event.target.matches('[data-dossier-navigation-item]')) {
        this.handleDossierNavClick(event);
      }
    });

    // carousel
    this.carousel.addEventListener('click', event => {
      if (event.target.matches('[data-dossier-navigation-item]')) {
        this.handleDossierNavClick(event);
      }
    });

    this.carousel.addEventListener('click', event => {
      event.preventDefault();
      if (event.target.matches('[data-dossier-carousel-nav]')) {
        const direction = event.target.dataset.dossierCarouselNav;

        if (direction === previous && +this.carousel.dataset.currentslide > 0) {
          this.changeSlide(+this.carousel.dataset.currentslide - 1);
        } else if (direction === next && +this.carousel.dataset.currentslide !== +this.carousel.dataset.slidecount - 1) {
          this.changeSlide(+this.carousel.dataset.currentslide + 1);
        } else if (direction === previous && +this.carousel.dataset.currentslide === 0) {
          this.hideCarousel();
          this.showIntro();
        }
      }
    });
  }

  static get defaults() {
    return _defaults;
  }

  static init(elem, options) {
    return super.init(this, elem, options);
  }


  handleDossierNavClick(event) {
    event.preventDefault();

    const goTo = event.target.dataset.dossierNavigationItem;

    console.log(goTo);

    if (goTo === 'intro') {
      this.showIntro();
      this.hideCarousel();
      this.changeSlide(0);
    } else if (+goTo) {
      this.hideIntro();
      this.showCarousel();
      this.changeSlide(+goTo - 1);
    }
  }

  changeSlide(slideNumber) {
    const translate = slideNumber * 100;
    this.carousel.querySelector('.c-dossier__carousel__items').style.transform = `translateX(-${translate}%)`;
    this.carousel.dataset.currentslide = +slideNumber;
    this.removeActiveLinks();
    this.nav.querySelector(`.c-dossier__navigation__item:nth-child(${(slideNumber + 2)})`).classList.add('active');
    this.carousel.querySelector(`.c-dossier__carousel__nav__item:nth-child(${(slideNumber + 1)})`).classList.add('active');
    if (slideNumber === +this.carousel.dataset.slidecount - 1) {
      this.enableButtons();
      this.disableButton(this.carousel.querySelector('[data-dossier-carousel-nav="next"]'));
    } else {
      this.enableButtons();
    }
  }

  disableButton(button) {
    button.setAttribute('disabled', '');
  }

  enableButtons() {
    if (this.carousel.querySelector('[data-dossier-carousel-nav][disabled]')) {
      this.carousel.querySelector('[data-dossier-carousel-nav][disabled]').removeAttribute('disabled');
    }
  }

  removeActiveLinks() {
    if (this.nav.querySelector('.c-dossier__navigation__item.active') &&
      this.carousel.querySelector('.c-dossier__carousel__nav__item.active')) {
      this.nav.querySelector('.c-dossier__navigation__item.active').classList.remove('active');
      this.carousel.querySelector('.c-dossier__carousel__nav__item.active').classList.remove('active');
    }
  }

  showIntro() {
    this.intro.classList.remove(visibleClass);
  }

  hideIntro() {
    this.intro.classList.add(visibleClass);
  }

  showCarousel() {
    this.carousel.classList.remove(visibleClass);
  }

  hideCarousel() {
    this.carousel.classList.add(visibleClass);
  }
}

export default () => {
  const elem = document.querySelector(`[${CONSTANTS.attrName}]`);
  if (elem) {
    new Carousel(elem);
  }
};
