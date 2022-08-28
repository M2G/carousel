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

    prevButton?.addEventListener(
      CLICK,
      (e): void => {
        let n = e.target.href.slice(-1) * 1 - 1;
        console.log('n', n);
        console.log('nextButton', nextButton.href);
        if (n === -1) n = 0;
        e.target.href = e.target.href.slice(0, -1) + n;
      },
      false
    );

    nextButton?.addEventListener(
      CLICK,
      (e): void => {
        let n = e.target.href.slice(-1) * 1 + 1;
        if (n > items.length) n = items.length;
        e.target.href = e.target.href.slice(0, -1) + n;
      },
      false
    );

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
