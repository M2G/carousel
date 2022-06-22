/* eslint-disable */
import Component from './component';

const visibleClass = 'is-hidden';

const defaults = {
  currentslide: 0,
};

class Carousel extends Component {
  private readonly carousel: any;
  private readonly intro: Element | null;
  private readonly introBtn: Element | null | undefined;

  public constructor(elem, params) {
    super(Carousel, elem, params);

    this.carousel = this.elem?.querySelector('[data-dossier-carousel]');
    this.intro = this.elem?.querySelector('[data-dossier-intro]');
    this.introBtn = this.intro?.querySelector('.c-btn');
    // data-dossier-navigation-item="intro


    // intro
    this.introBtn?.addEventListener('click', (): void => {
        this.hideIntro();
        this.showCarousel();
    });

  }

  static get defaults() {
    return defaults;
  }

  static create(elem, options) {
    return super.create(this, elem, options);
  }
/*
  private disableButton(button): void {
    button?.setAttribute('disabled', '');
  }
*/

  /*
  private showIntro(): void {
    this.intro?.classList.remove(visibleClass);
  }
*/
  private hideIntro(): void {
    this.intro?.classList.add(visibleClass);
  }
/*
  private hideCarousel(): void {
    this.carousel?.classList.add(visibleClass);
  }
*/
  private showCarousel(): void {
    this.carousel?.classList.remove(visibleClass);
  }

}

export default Carousel;
