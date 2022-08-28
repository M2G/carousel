/* eslint-disable */
import Component from './component';

const visibleClass = 'is-hidden';

const CLICK = 'click';

const defaults = {};

class Carousel extends Component {
  private readonly carousel: any;
  private readonly intro: Element | null;

  public constructor(elem, params) {
    super(Carousel, elem, params);

    this.carousel = this.elem?.querySelector('[data-dossier-carousel]');
    this.intro = this.elem?.querySelector('[data-dossier-intro]');
    const introBtn = this.intro?.querySelector('.c-btn');
    const navIntro = this.elem?.querySelector('[data-dossier-navigation-intro]');
    const items = this.carousel?.querySelector('.c-dossier__carousel__items').children;
    const prevButton = this.carousel?.querySelector('[data-prev]');
    const nextButton = this.carousel?.querySelector('[data-next]');

    let counter = 1;

    prevButton?.addEventListener(CLICK, (): void => {
      if (counter === 1) return;
      counter -= 1;
      prevButton?.setAttribute('href', `#slide${counter}`);
      nextButton?.setAttribute('href', `#slide${counter - 1}`);
    });

    nextButton?.addEventListener(CLICK, (): void => {
      if (items.length === counter) return;
      counter += 1;
      nextButton?.setAttribute('href', `#slide${counter - 1}`);
      nextButton?.setAttribute('href', `#slide${counter}`);
    });

    introBtn?.addEventListener(CLICK, (): void => {
      this.hideIntro();
      this.showCarousel();
    });

    navIntro?.addEventListener(CLICK, (): void => {
      this.hideCarousel();
      this.showIntro();
    });
  }

  static get defaults() {
    return defaults;
  }

  static create(elem, options) {
    return super.create(this, elem, options);
  }

  private showIntro(): void {
    this.intro?.classList.remove(visibleClass);
  }

  private hideIntro(): void {
    this.intro?.classList.add(visibleClass);
  }

  private hideCarousel(): void {
    this.carousel?.classList.add(visibleClass);
  }

  private showCarousel(): void {
    this.carousel?.classList.remove(visibleClass);
  }
}

export default Carousel;
