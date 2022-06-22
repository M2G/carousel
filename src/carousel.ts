/* eslint-disable */
import Component from './component';

const visibleClass = 'is-hidden';
// const previous = 'prev';
// const next = 'next';

const defaults = {
  currentslide: 0,
};

class Carousel extends Component {
  private readonly carousel: any;

  // private readonly nav: any;

  private readonly intro: Element | null;

  // private container: any;

  private currentslide: any;

  private readonly introBtn: Element | null | undefined;

 // private readonly slidecount: number;

  public constructor(elem, params) {
    super(Carousel, elem, params);

    this.currentslide = Carousel.defaults.currentslide;

    console.log('--->', this.elem);

    this.carousel = this.elem?.querySelector('[data-dossier-carousel]');
    this.intro = this.elem?.querySelector('[data-dossier-intro]');
    this.introBtn = this.intro?.querySelector('.c-btn');
    //this.nav = this.elem?.querySelector('[data-dossier-navigation]');
    // this.slidecount = this.carousel?.querySelectorAll('.c-dossier__carousel__item')?.length;

    // intro
    this.introBtn?.addEventListener('click', (): void => {
        this.hideIntro();
        // this.changeSlide(this.currentslide);
        this.showCarousel();
    });

    // nav
   /* this.nav.addEventListener('click', ({ target }) => {
      if (target.matches('[data-dossier-navigation-item]')) {
        this.handleDossierNavClick(target);
      }
    });

    // carousel
    this.carousel.addEventListener('click', ({ target }) => {
      if (target.matches('[data-dossier-navigation-item]')) {
        this.handleDossierNavClick(target);
      }
    });*/

    /*
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
    });*/
  }

  static get defaults() {
    return defaults;
  }

  static create(elem, options) {
    return super.create(this, elem, options);
  }

  public getCurrentSlide(): number {
    return this.currentslide;
  }

  public setCurrentSlide(currentslide): void {
    this.currentslide = currentslide;
  }

  /*private handleDossierNavClick({ dataset }): void {
    const goTo = dataset?.dossierNavigationItem;
    if (goTo === 'intro') {
      this.showIntro();
      this.hideCarousel();
      this.changeSlide(0);
    } else if (Number(goTo)) {
      this.hideIntro();
      this.showCarousel();
      this.changeSlide(Number(goTo) - 1);
    }
  }*/

 /* private changeSlide(slideNumber: number): void {
    const translate = slideNumber * 100;
    this.carousel.querySelector('.c-dossier__carousel__items').style.transform = `translateX(-${translate}%)`;
    this.setCurrentSlide(slideNumber);
    this.removeActiveLinks();
    this.nav?.querySelector(`.c-dossier__navigation__item:nth-child(${slideNumber + 2})`).classList.add('active');
    this.carousel?.querySelector(`.c-dossier__carousel__nav__item:nth-child(${slideNumber + 1})`).classList.add('active');
    if (slideNumber === this.slidecount - 1) {
      this.enableButtons();
      this.disableButton(this.carousel?.querySelector('[data-dossier-carousel-nav="next"]'));
    } else {
      this.enableButtons();
    }
  }*/
/*
  private disableButton(button): void {
    button?.setAttribute('disabled', '');
  }

  private enableButtons(): void {
    if (this.carousel?.querySelector('[data-dossier-carousel-nav][disabled]')) {
      this.carousel?.querySelector('[data-dossier-carousel-nav][disabled]')?.removeAttribute('disabled');
    }
  }

  private removeActiveLinks(): void {
    if (this.nav?.querySelector('.c-dossier__navigation__item.active')
      && this.carousel?.querySelector('.c-dossier__carousel__nav__item.active')) {
      this.nav?.querySelector('.c-dossier__navigation__item.active').classList.remove('active');
      this.carousel?.querySelector('.c-dossier__carousel__nav__item.active').classList.remove('active');
    }
  }

  private showIntro(): void {
    this.intro?.classList.remove(visibleClass);
  }
*/
  private hideIntro(): void {
    this.intro?.classList.add(visibleClass);
  }

  private showCarousel(): void {
    this.carousel?.classList.remove(visibleClass);
  }
/*
  private hideCarousel(): void {
    this.carousel?.classList.add(visibleClass);
  }*/
}

export default Carousel;
