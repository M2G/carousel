/* eslint-disable */
import Component from './component';

const visibleClass = 'is-hidden';

const defaults = {};

class Carousel extends Component {
  private readonly carousel: any;
  private readonly intro: Element | null;
  private readonly introBtn: Element | null | undefined;
  private readonly navIntro: Element | null;
  private readonly navItemIntro: Element | null;

  public constructor(elem, params) {
    super(Carousel, elem, params);

    this.carousel = this.elem?.querySelector('[data-dossier-carousel]');
    this.intro = this.elem?.querySelector('[data-dossier-intro]');
    this.introBtn = this.intro?.querySelector('.c-btn');
    this.navIntro = this.elem?.querySelector('[data-dossier-navigation-intro]');
    this.navItemIntro = this.elem?.querySelector('[data-dossier-navigation-item-intro]');

    this.introBtn?.addEventListener('click', (): void => {
      this.hideIntro();
      this.showCarousel();
    });

    this.navIntro?.addEventListener('click', (): void => {
      this.hideCarousel();
      this.showIntro();
    });

    this.navItemIntro?.addEventListener('click', (): void => {
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
