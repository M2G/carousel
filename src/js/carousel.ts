/* eslint-disable */
import Component from './component';
import markup from './markup';

const visibleClass = 'is-hidden';
const previous = 'prev';
const next = 'next';

let _defaults = {
  currentslide: 0
};

class Carousel extends Component {
  private carousel: any;
  private nav: any;
  private intro: Element | null;
  private container: any;
  constructor(elem, params) {
    super(Carousel, elem, params);

    console.log('this', this)

    this.init(elem);
    this.carousel = this.elem?.querySelector('[data-dossier-carousel]');

    console.log('this.carousel', this.carousel)


    this.intro =  this.elem?.querySelector('[data-dossier-intro]');
    this.nav = this.elem?.querySelector('[data-dossier-navigation]');
    this.carousel.dataset.currentslide = Carousel.defaults.currentslide;
    this.carousel.dataset.slidecount = this.carousel?.querySelectorAll('.c-dossier__carousel__item')?.length;

    // intro
    // @ts-ignore
    this.intro.addEventListener('click', ({ target }: { matches: Function }): void => {
      if (target?.matches('.c-btn')) {
        this.hideIntro();
        // @ts-ignore
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

    // @ts-ignore
    this.carousel.addEventListener('click', ({ target, target: { dataset } }: { matches: Function }) => {
      if (target.matches('[data-dossier-carousel-nav]')) {
        const direction = dataset.dossierCarouselNav;

        console.log('direction', direction)

        if (direction === previous && +this.carousel.dataset.currentslide > 0) {

         // this.changeSlide(+this.carousel.dataset.currentslide - 1);

        } else if (direction === next && +this.carousel.dataset.currentslide !== +this.carousel.dataset.slidecount - 1) {

          // this.changeSlide(+this.carousel.dataset.currentslide + 1);

        } else if (direction === previous && +this.carousel.dataset.currentslide === 0) {

         // this.hideCarousel();
         // this.showIntro();

        }
      }
    });
  }

  static get defaults() {
    return _defaults;
  }

  static create(elem, options) {
    return super.create(this, elem, options);
  }

  init(container) {
    this.container = container;
    this.render();
  }

  static markup(instance) {
    return markup;
  }

  render() {
    this.container.innerHTML = Carousel.markup(this);
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
    // @ts-ignore
    this.carousel.querySelector('.c-dossier__carousel__items').style.transform = `translateX(-${translate}%)`;
    // @ts-ignore
    this.carousel.dataset.currentslide = +slideNumber;
    this.removeActiveLinks();
    // @ts-ignore
    this.nav.querySelector(`.c-dossier__navigation__item:nth-child(${(slideNumber + 2)})`).classList.add('active');
    // @ts-ignore
    this.carousel.querySelector(`.c-dossier__carousel__nav__item:nth-child(${(slideNumber + 1)})`).classList.add('active');
    // @ts-ignore
    if (slideNumber === +this.carousel.dataset.slidecount - 1) {
      this.enableButtons();
      // @ts-ignore
      this.disableButton(this.carousel.querySelector('[data-dossier-carousel-nav="next"]'));
    } else {
      this.enableButtons();
    }
  }

  disableButton(button) {
    button.setAttribute('disabled', '');
  }

  enableButtons() {
    // @ts-ignore
    if (this.carousel.querySelector('[data-dossier-carousel-nav][disabled]')) {
      // @ts-ignore
      this.carousel.querySelector('[data-dossier-carousel-nav][disabled]').removeAttribute('disabled');
    }
  }

  removeActiveLinks() {
    // @ts-ignore
    if (this.nav.querySelector('.c-dossier__navigation__item.active') &&
      // @ts-ignore
      this.carousel.querySelector('.c-dossier__carousel__nav__item.active')) {
      // @ts-ignore
      this.nav.querySelector('.c-dossier__navigation__item.active').classList.remove('active');
      // @ts-ignore
      this.carousel.querySelector('.c-dossier__carousel__nav__item.active').classList.remove('active');
    }
  }

  showIntro(): void {
    this.intro?.classList.remove(visibleClass);
  }

  hideIntro(): void {
    this.intro?.classList.add(visibleClass);
  }

  showCarousel(): void {
    this.carousel?.classList.remove(visibleClass);
  }

  hideCarousel(): void {
    this.carousel?.classList.add(visibleClass);
  }
}

export default Carousel;
