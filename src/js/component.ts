/* eslint-disable */
class Component {
  protected elem: any;
  /**
   * Generic constructor for all components
   * @constructor
   * @param {Element} el
   * @param {Object} _
   */

  constructor(ClassDef, elem, _) {
    if (!(elem instanceof Element)) {
      console.error(Error(`${elem} is not an HTML Element`));
    }

    this.elem = elem;
  }

  /**
   * Initializes components
   * @param {class} classDef
   * @param {Element | NodeList} els
   * @param {Object} options
   */

  static create(ClassDef, elem, options) {
    let instances = null;
    if (elem instanceof Element) {
      instances = new ClassDef(elem, options);
    } else if (!!elem && elem instanceof NodeList) {
      const instancesArr = [];
      for (let i = 0; i < elem.length; i += 1) {
        // @ts-ignore
        instancesArr.push(new ClassDef(elem[i], options));
      }
      // @ts-ignore
      instances = instancesArr;
    }

    return instances;
  }
}

export default Component;
