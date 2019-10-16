import Component from './component';

const visibleClass = 'is-hidden';
const previous = 'prev';
const next = 'next';

let _defaults = {
  currentslide: 0
};

class Carousel extends Component {
  constructor(elem, params) {
    super(Carousel, elem, params);

    this.carousel = this.elem.querySelector('[data-dossier-carousel]');
    this.intro = this.elem.querySelector('[data-dossier-intro]');
    this.nav = this.elem.querySelector('[data-dossier-navigation]');
    this.carousel.dataset.currentslide = Carousel.defaults.currentslide;
    this.carousel.dataset.slidecount = this.carousel.querySelectorAll('.c-dossier__carousel__item').length;

    // intro
    this.intro.addEventListener('click', ({ target }) => {
      if (target.matches('.c-btn')) {
        this.hideIntro();
        this.changeSlide(+this.carousel.dataset.currentslide);
        this.showCarousel();
      }
    });

    // nav
    this.nav.addEventListener('click', ({ target }) => {
      if (target.matches('[data-dossier-navigation-item]')) {
        this.handleDossierNavClick(target);
      }
    });

    // carousel
    this.carousel.addEventListener('click', ({ target }) => {
      if (target.matches('[data-dossier-navigation-item]')) {
        this.handleDossierNavClick(target);
      }
    });

    this.carousel.addEventListener('click', ({ target, target: { dataset = '' } }) => {
      if (target.matches('[data-dossier-carousel-nav]')) {
        const direction = dataset.dossierCarouselNav;

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


  handleDossierNavClick({ dataset }) {
    const goTo = dataset.dossierNavigationItem;

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

export default Carousel;
