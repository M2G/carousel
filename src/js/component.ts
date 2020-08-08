/* eslint-disable */
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
class Component {
  // eslint-disable-next-line
  private elem: any;
  // eslint-disable-next-line
  /**
   * Generic constructor for all components
   * @constructor
   * @param {Element} el
   * @param {Object} _
   */
  // eslint-disable-next-line
  constructor(ClassDef, elem, _) {
    if (!(elem instanceof Element)) {
      console.error(Error(`${elem} is not an HTML Element`));
    }

    // eslint-disable-next-line
    this.elem = elem;
  }

  /**
   * Initializes components
   * @param {class} classDef
   * @param {Element | NodeList} els
   * @param {Object} options
   */
  // eslint-disable-next-line
  static init(ClassDef, elem, options) {
    let instances = null;
    if (elem instanceof Element) {
      // eslint-disable-next-line
      instances = new ClassDef(elem, options);
    } else if (!!elem && elem instanceof NodeList) {
      const instancesArr = [];
      // eslint-disable-next-line
      for (let i = 0; i < elem.length; i += 1) {
        // eslint-disable-next-line
        // @ts-expect-error
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        instancesArr.push(new ClassDef(elem[i], options));
      }
      // eslint-disable-next-line
      // @ts-expect-error
      instances = instancesArr;
    }

    return instances;
  }
}

export default Component;
