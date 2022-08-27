/* eslint-disable */
import Component from './component';

const visibleClass = 'is-hidden';

const CLICK = 'click';

const defaults = {};

class Carousel extends Component {
  private readonly carousel: any;
  private readonly intro: Element | null;
  private readonly introBtn: Element | null | undefined;
  private readonly navIntro: Element | null;

  public constructor(elem, params) {
    super(Carousel, elem, params);

    this.carousel = this.elem?.querySelector('[data-dossier-carousel]');
    this.intro = this.elem?.querySelector('[data-dossier-intro]');
    this.introBtn = this.intro?.querySelector('.c-btn');
    this.navIntro = this.elem?.querySelector('[data-dossier-navigation-intro]');

    const items = this.carousel?.querySelector('.c-dossier__carousel__items').children;
    const nav = this.carousel?.querySelector('.c-dossier__carousel__nav').children;

    const prevButton = nav?.[0];
    const nextButton = nav?.[2];

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

    this.introBtn?.addEventListener(CLICK, (): void => {
      this.hideIntro();
      this.showCarousel();
    });

    this.navIntro?.addEventListener(CLICK, (): void => {
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
