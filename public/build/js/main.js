/*! JSMVC 0.0.0 built on: Sun Dec 30 2018 21:45:05 9a0a1cd955585020a449 */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/src/js/dossier.js":
/*!**********************************!*\
  !*** ./public/src/js/dossier.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CONSTANTS = {
  attrName: 'data-app'
};
var visibleClass = 'is-hidden';
var previous = 'prev';
var next = 'next';

var Carousel =
/*#__PURE__*/
function () {
  function Carousel(elem) {
    var _this = this;

    _classCallCheck(this, Carousel);

    this.elem = elem;
    this.carousel = this.elem.querySelector('[data-dossier-carousel]');
    this.intro = this.elem.querySelector('[data-dossier-intro]');
    this.nav = this.elem.querySelector('[data-dossier-navigation]');
    this.carousel.dataset.currentslide = 0;
    this.carousel.dataset.slidecount = this.carousel.querySelectorAll('.c-dossier__carousel__item').length;
    this.intro.addEventListener('click', function (event) {
      event.preventDefault();

      if (event.target.matches('.c-btn')) {
        _this.hideIntro();

        _this.changeSlide(+_this.carousel.dataset.currentslide);

        _this.showCarousel();
      }
    });
    this.nav.addEventListener('click', function (event) {
      if (event.target.matches('[data-dossier-navigation-item]')) {
        _this.handleDossierNavClick(event);
      }
    });
    this.carousel.addEventListener('click', function (event) {
      if (event.target.matches('[data-dossier-navigation-item]')) {
        _this.handleDossierNavClick(event);
      }
    });
    this.carousel.addEventListener('click', function (event) {
      event.preventDefault();

      if (event.target.matches('[data-dossier-carousel-nav]')) {
        var direction = event.target.dataset.dossierCarouselNav;

        if (direction === previous && +_this.carousel.dataset.currentslide > 0) {
          _this.changeSlide(+_this.carousel.dataset.currentslide - 1);
        } else if (direction === next && +_this.carousel.dataset.currentslide !== +_this.carousel.dataset.slidecount - 1) {
          _this.changeSlide(+_this.carousel.dataset.currentslide + 1);
        } else if (direction === previous && +_this.carousel.dataset.currentslide === 0) {
          _this.hideCarousel();

          _this.showIntro();
        }
      }
    });
  }

  _createClass(Carousel, [{
    key: "handleDossierNavClick",
    value: function handleDossierNavClick(event) {
      event.preventDefault();
      var goTo = event.target.dataset.dossierNavigationItem;
      console.log(goTo);

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
  }, {
    key: "changeSlide",
    value: function changeSlide(slideNumber) {
      var translate = slideNumber * 100;
      this.carousel.querySelector('.c-dossier__carousel__items').style.transform = "translateX(-".concat(translate, "%)");
      this.carousel.dataset.currentslide = +slideNumber;
      this.removeActiveLinks();
      this.nav.querySelector(".c-dossier__navigation__item:nth-child(".concat(slideNumber + 2, ")")).classList.add('active');
      this.carousel.querySelector(".c-dossier__carousel__nav__item:nth-child(".concat(slideNumber + 1, ")")).classList.add('active');

      if (slideNumber === +this.carousel.dataset.slidecount - 1) {
        this.enableButtons();
        this.disableButton(this.carousel.querySelector('[data-dossier-carousel-nav="next"]'));
      } else {
        this.enableButtons();
      }
    }
  }, {
    key: "disableButton",
    value: function disableButton(button) {
      button.setAttribute('disabled', '');
    }
  }, {
    key: "enableButtons",
    value: function enableButtons() {
      if (this.carousel.querySelector('[data-dossier-carousel-nav][disabled]')) {
        this.carousel.querySelector('[data-dossier-carousel-nav][disabled]').removeAttribute('disabled');
      }
    }
  }, {
    key: "removeActiveLinks",
    value: function removeActiveLinks() {
      if (this.nav.querySelector('.c-dossier__navigation__item.active') && this.carousel.querySelector('.c-dossier__carousel__nav__item.active')) {
        this.nav.querySelector('.c-dossier__navigation__item.active').classList.remove('active');
        this.carousel.querySelector('.c-dossier__carousel__nav__item.active').classList.remove('active');
      }
    }
  }, {
    key: "showIntro",
    value: function showIntro() {
      this.intro.classList.remove(visibleClass);
    }
  }, {
    key: "hideIntro",
    value: function hideIntro() {
      this.intro.classList.add(visibleClass);
    }
  }, {
    key: "showCarousel",
    value: function showCarousel() {
      this.carousel.classList.remove(visibleClass);
    }
  }, {
    key: "hideCarousel",
    value: function hideCarousel() {
      this.carousel.classList.add(visibleClass);
    }
  }]);

  return Carousel;
}();

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var elem = document.querySelector("[".concat(CONSTANTS.attrName, "]"));

  if (elem) {
    new Carousel(elem);
  }
});

/***/ }),

/***/ "./public/src/js/main.js":
/*!*******************************!*\
  !*** ./public/src/js/main.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dossier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dossier */ "./public/src/js/dossier.js");

Object(_dossier__WEBPACK_IMPORTED_MODULE_0__["default"])();

/***/ }),

/***/ 0:
/*!*************************************!*\
  !*** multi ./public/src/js/main.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./public/src/js/main.js */"./public/src/js/main.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map