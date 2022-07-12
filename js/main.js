/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/function/accordion.js":
/*!**************************************!*\
  !*** ./src/js/function/accordion.js ***!
  \**************************************/
/***/ (() => {

//Аккордеон

/***/ }),

/***/ "./src/js/function/burger.js":
/*!***********************************!*\
  !*** ./src/js/function/burger.js ***!
  \***********************************/
/***/ (() => {



/***/ }),

/***/ "./src/js/function/slider.js":
/*!***********************************!*\
  !*** ./src/js/function/slider.js ***!
  \***********************************/
/***/ (() => {



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _function_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function/burger */ "./src/js/function/burger.js");
/* harmony import */ var _function_burger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_function_burger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _function_accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./function/accordion */ "./src/js/function/accordion.js");
/* harmony import */ var _function_accordion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_function_accordion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _function_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./function/slider */ "./src/js/function/slider.js");
/* harmony import */ var _function_slider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_function_slider__WEBPACK_IMPORTED_MODULE_2__);


 //select

let select = function () {
  let selectHeader = document.querySelectorAll('.select__header');
  let selectItem = document.querySelectorAll('.select__item');
  selectHeader.forEach(item => {
    item.addEventListener('click', selectToggle);
  });
  selectItem.forEach(item => {
    item.addEventListener('click', selectChoose);
  });

  function selectToggle() {
    this.parentElement.classList.toggle('is-active');
  }

  function selectChoose() {
    let text = this.innerText,
        select = this.closest('.select'),
        currentText = select.querySelector('.select__current');
    currentText.innerText = text;
    select.classList.remove('is-active');
  }
};

select(); //dors

let cards = document.querySelectorAll('.cards');
let dots = document.querySelectorAll('.dot');
let index = 0;
let slide;

const activeCard = n => {
  for (let card of cards) {
    card.classList.remove('active');
  }

  cards[n].classList.add('active');
};

const activeDot = n => {
  for (let dot of dots) {
    dot.classList.remove('active');
  }

  dots[n].classList.add('active');
};

dots.forEach((item, indexDot) => {
  item.addEventListener('click', () => {
    index = indexDot;
    activeDot(index);
    activeCard(index);
  });
});
})();

/******/ })()
;
//# sourceMappingURL=main.js.map