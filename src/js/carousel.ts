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
  private currentslide: any;
  private introBtn: Element | null | undefined;

  private slidecount: number;
  constructor(elem, params) {
    super(Carousel, elem, params);

    this.init(elem);
    this.carousel = this.elem?.querySelector('[data-dossier-carousel]');
    this.intro =  this.elem?.querySelector('[data-dossier-intro]');
    this.introBtn = this.intro?.querySelector('.c-btn');

    this.nav = this.elem?.querySelector('[data-dossier-navigation]');
    this.currentslide = Carousel.defaults.currentslide;
    this.slidecount = this.carousel?.querySelectorAll('.c-dossier__carousel__item')?.length;

    // intro
    this.introBtn?.addEventListener('click', (): void => {
        this.hideIntro();
        this.changeSlide(this.currentslide);
        this.showCarousel();
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
    this.carousel.addEventListener('click', ({ target, target: { dataset } }: { matches: () => {} }) => {
      if (target.matches('[data-dossier-carousel-nav]')) {
        const direction = dataset?.dossierCarouselNav;
        const index = this.getCurrentSlide();
        if (direction === previous && index > 0) {
         this.changeSlide(index - 1);
        } else if (direction === next && index !== this.slidecount - 1) {
          this.changeSlide(index + 1);
        } else if (direction === previous && index === 0) {
         this.hideCarousel();
         this.showIntro();
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

  init(container): void {
    this.container = container;
    this.render();
  }

  static markup(instance): string {
    return markup;
  }

  render(): void {
    this.container.innerHTML = Carousel.markup(this);
  }

  getCurrentSlide(): number {
    return this.currentslide;
  }

  setCurrentSlide(currentslide): void {
    this.currentslide = currentslide
  }


  handleDossierNavClick({ dataset }): void {
    const goTo = dataset?.dossierNavigationItem;
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

  changeSlide(slideNumber): void {
    const translate = slideNumber * 100;
    this.carousel.querySelector('.c-dossier__carousel__items').style.transform = `translateX(-${translate}%)`;
    this.setCurrentSlide(slideNumber);
    this.removeActiveLinks();
    this.nav?.querySelector(`.c-dossier__navigation__item:nth-child(${(slideNumber + 2)})`).classList.add('active');
    this.carousel?.querySelector(`.c-dossier__carousel__nav__item:nth-child(${(slideNumber + 1)})`).classList.add('active');
    if (slideNumber === this.slidecount - 1) {
      this.enableButtons();
      this.disableButton(this.carousel?.querySelector('[data-dossier-carousel-nav="next"]'));
    } else {
      this.enableButtons();
    }
  }

  disableButton(button): void {
    button.setAttribute('disabled', '');
  }

  enableButtons(): void {
    if (this.carousel?.querySelector('[data-dossier-carousel-nav][disabled]')) {
      this.carousel?.querySelector('[data-dossier-carousel-nav][disabled]')?.removeAttribute('disabled');
    }
  }

  removeActiveLinks(): void {
    if (this.nav?.querySelector('.c-dossier__navigation__item.active') &&
      this.carousel?.querySelector('.c-dossier__carousel__nav__item.active')) {
      this.nav?.querySelector('.c-dossier__navigation__item.active').classList.remove('active');
      this.carousel?.querySelector('.c-dossier__carousel__nav__item.active').classList.remove('active');
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
