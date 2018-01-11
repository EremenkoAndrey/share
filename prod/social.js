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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/prod/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(1);

var _Facebook = __webpack_require__(2);

var _Facebook2 = _interopRequireDefault(_Facebook);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var config = {
    blockClassName: 'sharing',
    elementClassName: 'item',
    networks: {
        facebook: {}
    }
};

var Socials = function () {
    function Socials() {
        _classCallCheck(this, Socials);
    }

    _createClass(Socials, [{
        key: 'create',
        value: function create(element, options) {
            var _this = this;

            var css = {
                block: options.blockClassName || 'sharing',
                element: options.elementClassName ? options.blockClassName + '__' + options.elementClassName : 'sharing__item'
            };
            var ul = document.createElement('ul');
            ul.className = css.block;

            Object.keys(options.networks).forEach(function (network) {
                var el = document.createElement('li');
                el.className = css.element + ' ' + css.element + '_' + network;
                _this.initNetwork(network, el);
                ul.insertBefore(el, null);
            });
            element.insertBefore(ul, null);
        }
    }, {
        key: 'initNetwork',
        value: function initNetwork(name, element) {
            switch (name) {
                case 'facebook':
                    new _Facebook2.default().init(element);
                    return true;
                default:
                    return false;
            }
        }
    }]);

    return Socials;
}();

new Socials().create(document.getElementById('social-container'), config);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ShareButton2 = __webpack_require__(3);

var _ShareButton3 = _interopRequireDefault(_ShareButton2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Facebook = function (_ShareButton) {
    _inherits(Facebook, _ShareButton);

    function Facebook() {
        _classCallCheck(this, Facebook);

        return _possibleConstructorReturn(this, (Facebook.__proto__ || Object.getPrototypeOf(Facebook)).apply(this, arguments));
    }

    _createClass(Facebook, [{
        key: 'init',
        value: function init(element) {
            console.log(this.title);
        }
    }, {
        key: 'getUrl',
        value: function getUrl() {
            var baseUrl = 'https://www.facebook.com/sharer.php?';
            var pageUrl = window.location.href;
            var delimeter = '&';
        }
    }]);

    return Facebook;
}(_ShareButton3.default);
// 'https://www.facebook.com/sharer.php?' +
// 'src=sp&' +
// 'u=https%3A%2F%2Frussian.rt.com%962-strelba-fabrika-zalozhniki&' +
// 'title=%C2%AB%D0%920%D1%81%D1%82%D1%80%D0%B5%%BB%D0%BE%D0%BA&' +
// 'description=dsggsgsdgs&' +
// 'picture=&' +
// 'utm_source=share2


exports.default = Facebook;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ShareButton = function ShareButton() {
    _classCallCheck(this, ShareButton);

    this.title = document.getElementsByName('title');
};

exports.default = ShareButton;

/***/ })
/******/ ]);