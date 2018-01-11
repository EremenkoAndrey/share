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
    classNames: {
        block: 'sharing',
        elements: 'sharing__item'
    },
    networks: {
        facebook: {
            title: "title",
            description: "description"
        }
    }
};

var Socials = function () {
    function Socials(element, options) {
        _classCallCheck(this, Socials);

        this.element = element;
        this.options = options;
    }

    _createClass(Socials, [{
        key: 'init',
        value: function init() {
            var _this = this;

            var _options = this.options,
                classNames = _options.classNames,
                networks = _options.networks;

            var list = this._createElementsList(networks, classNames);
            this.element.insertBefore(list, null);
            list.addEventListener('click', function (event) {
                if (!event.target.dataset.name) return;
                var networkName = event.target.dataset.name;
                _this._initNetwork(networkName, config.networks[networkName]);
            });
        }
    }, {
        key: '_initNetwork',
        value: function _initNetwork(name, params) {
            switch (name) {
                case 'facebook':
                    new _Facebook2.default(params).show();
                    return true;
                default:
                    return false;
            }
        }
    }, {
        key: '_createElementsList',
        value: function _createElementsList(networks, classNames) {
            var css = {
                block: classNames.block || 'sharing',
                element: classNames.elements ? '' + classNames.elements : 'sharing__item'
            };
            var ul = document.createElement('ul');
            ul.className = css.block;

            Object.keys(networks).forEach(function (network) {
                var el = document.createElement('li');
                el.className = css.element + ' ' + css.element + '_' + network;
                el.dataset.name = network;
                ul.insertBefore(el, null);
            });
            return ul;
        }
    }]);

    return Socials;
}();

new Socials(document.getElementById('social-container'), config).init();

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

    function Facebook(params) {
        _classCallCheck(this, Facebook);

        var _this = _possibleConstructorReturn(this, (Facebook.__proto__ || Object.getPrototypeOf(Facebook)).call(this, params));

        _this.params = params;
        return _this;
    }

    _createClass(Facebook, [{
        key: 'show',
        value: function show() {
            var url = this._getUrl();
            var popupWidth = 650;
            var winParams = 'toolbar=0, \n                            status=0, \n                            width=' + popupWidth + ', \n                            height=450,\n                            top=200,\n                            left=' + (window.innerWidth / 2 - popupWidth / 2);
            console.log(url);
            window.open(url, '', winParams);
        }
    }, {
        key: '_getUrl',
        value: function _getUrl() {
            var baseUrl = 'https://www.facebook.com/sharer.php?';
            var pageUrl = window.location.href;
            var title = this.params.title || '';
            var description = this.params.description || '';

            return baseUrl + 'src=sp&u=' + pageUrl + '&title=' + title + '&description=' + description;
        }
    }]);

    return Facebook;
}(_ShareButton3.default);

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