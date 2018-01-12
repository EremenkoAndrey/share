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
/******/ 	__webpack_require__.p = "/Share/prod/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ShareButton = function () {
    function ShareButton() {
        _classCallCheck(this, ShareButton);
    }

    _createClass(ShareButton, [{
        key: 'showPopup',
        value: function showPopup(url) {
            var popupWidth = 650;
            var winParams = 'toolbar=0, \n                            status=0, \n                            width=' + popupWidth + ', \n                            height=450,\n                            top=200,\n                            left=' + (window.innerWidth / 2 - popupWidth / 2);
            window.open(url, '', winParams);
        }
    }]);

    return ShareButton;
}();

exports.default = ShareButton;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(2);

var _Facebook = __webpack_require__(3);

var _Facebook2 = _interopRequireDefault(_Facebook);

var _Twitter = __webpack_require__(4);

var _Twitter2 = _interopRequireDefault(_Twitter);

var _Reddit = __webpack_require__(10);

var _Reddit2 = _interopRequireDefault(_Reddit);

var _GooglePlus = __webpack_require__(11);

var _GooglePlus2 = _interopRequireDefault(_GooglePlus);

var _Telegram = __webpack_require__(12);

var _Telegram2 = _interopRequireDefault(_Telegram);

var _WhatsApp = __webpack_require__(13);

var _WhatsApp2 = _interopRequireDefault(_WhatsApp);

var _FBMessenger = __webpack_require__(15);

var _FBMessenger2 = _interopRequireDefault(_FBMessenger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var config = {
    classNames: {
        block: 'sharing',
        elements: 'sharing__item'
    },
    networks: {
        facebook: {
            // Текст шаринга переопределяется
            title: ''
        },
        twitter: {
            // Текст шаринга
            //  text: 'Текст Твиттера',
            hashtags: ''
        },
        reddit: {
            // Текст шаринга
            title: 'Новость'
        },
        google: {
            // Текст шаринга
            title: 'Текст новости'
        },
        telegram: {
            // Текст шаринга
            text: 'Текст новости'
        },
        fbmessenger: {
            // Текст шаринга
            text: 'Текст новости'
        },
        whatsapp: {
            // Текст шаринга
            text: 'Текст новости'
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
                case 'google':
                    new _GooglePlus2.default(params).show();
                    return true;
                case 'reddit':
                    new _Reddit2.default(params).show();
                    return true;
                case 'twitter':
                    new _Twitter2.default(params).show();
                    return true;
                case 'telegram':
                    new _Telegram2.default(params).show();
                    return true;
                case 'whatsapp':
                    new _WhatsApp2.default(params).show();
                    return true;
                case 'fbmessenger':
                    new _FBMessenger2.default(params).show();
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

document.getElementsByName('title');
new Socials(document.getElementById('social-container'), config).init();

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ShareButton2 = __webpack_require__(0);

var _ShareButton3 = _interopRequireDefault(_ShareButton2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Facebook = function (_ShareButton) {
    _inherits(Facebook, _ShareButton);

    function Facebook(params) {
        _classCallCheck(this, Facebook);

        var _this = _possibleConstructorReturn(this, (Facebook.__proto__ || Object.getPrototypeOf(Facebook)).call(this));

        _this.params = params;
        return _this;
    }

    _createClass(Facebook, [{
        key: 'show',
        value: function show() {
            var url = this._getUrl();
            this.showPopup(url);
        }
    }, {
        key: '_getUrl',
        value: function _getUrl() {
            var baseUrl = 'https://www.facebook.com/sharer.php?';
            var pageUrl = window.location.href;
            var title = this.params.title || document.title;

            return baseUrl + 'src=sp&u=' + pageUrl + '&title=' + title;
        }
    }]);

    return Facebook;
}(_ShareButton3.default);

exports.default = Facebook;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ShareButton2 = __webpack_require__(0);

var _ShareButton3 = _interopRequireDefault(_ShareButton2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Twitter = function (_ShareButton) {
    _inherits(Twitter, _ShareButton);

    function Twitter(params) {
        _classCallCheck(this, Twitter);

        var _this = _possibleConstructorReturn(this, (Twitter.__proto__ || Object.getPrototypeOf(Twitter)).call(this));

        _this.params = params;
        return _this;
    }

    _createClass(Twitter, [{
        key: 'show',
        value: function show() {
            var url = this._getUrl();
            this.showPopup(url);
        }
    }, {
        key: '_getUrl',
        value: function _getUrl() {
            var baseUrl = 'https://twitter.com/intent/tweet?';
            var pageUrl = window.location.href;
            var text = this.params.text || document.title;
            var hashtags = this.params.hashtags || '';

            return baseUrl + 'text=' + text + '&url=' + pageUrl + '&hashtags=' + hashtags;
        }
    }]);

    return Twitter;
}(_ShareButton3.default);

exports.default = Twitter;

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ShareButton2 = __webpack_require__(0);

var _ShareButton3 = _interopRequireDefault(_ShareButton2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Reddit = function (_ShareButton) {
    _inherits(Reddit, _ShareButton);

    function Reddit(params) {
        _classCallCheck(this, Reddit);

        var _this = _possibleConstructorReturn(this, (Reddit.__proto__ || Object.getPrototypeOf(Reddit)).call(this));

        _this.params = params;
        return _this;
    }

    _createClass(Reddit, [{
        key: 'show',
        value: function show() {
            var url = this._getUrl();
            this.showPopup(url);
        }
    }, {
        key: '_getUrl',
        value: function _getUrl() {
            var baseUrl = 'https://www.reddit.com/submit?';
            var pageUrl = window.location.href;
            var title = this.params.title || document.title;

            return baseUrl + 'title=' + title + '&url=' + pageUrl;
        }
    }]);

    return Reddit;
}(_ShareButton3.default);

exports.default = Reddit;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ShareButton2 = __webpack_require__(0);

var _ShareButton3 = _interopRequireDefault(_ShareButton2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GooglePlus = function (_ShareButton) {
    _inherits(GooglePlus, _ShareButton);

    function GooglePlus(params) {
        _classCallCheck(this, GooglePlus);

        var _this = _possibleConstructorReturn(this, (GooglePlus.__proto__ || Object.getPrototypeOf(GooglePlus)).call(this));

        _this.params = params;
        return _this;
    }

    _createClass(GooglePlus, [{
        key: 'show',
        value: function show() {
            var url = this._getUrl();
            this.showPopup(url);
        }
    }, {
        key: '_getUrl',
        value: function _getUrl() {
            var baseUrl = 'https://plus.google.com/share?';
            var pageUrl = window.location.href;
            var title = this.params.title || document.title;

            return baseUrl + 't=' + title + '&url=' + pageUrl;
        }
    }]);

    return GooglePlus;
}(_ShareButton3.default);
/*

*/


exports.default = GooglePlus;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ShareButton2 = __webpack_require__(0);

var _ShareButton3 = _interopRequireDefault(_ShareButton2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Telegram = function (_ShareButton) {
    _inherits(Telegram, _ShareButton);

    function Telegram(params) {
        _classCallCheck(this, Telegram);

        var _this = _possibleConstructorReturn(this, (Telegram.__proto__ || Object.getPrototypeOf(Telegram)).call(this));

        _this.params = params;
        return _this;
    }

    _createClass(Telegram, [{
        key: 'show',
        value: function show() {
            var url = this._getUrl();
            this.showPopup(url);
        }
    }, {
        key: '_getUrl',
        value: function _getUrl() {
            var baseUrl = 'https://telegram.me/share/url?';
            var pageUrl = window.location.href;
            var text = this.params.text || document.title;

            return baseUrl + 'text=' + text + '&url=' + pageUrl;
        }
    }]);

    return Telegram;
}(_ShareButton3.default);

/*

*/


exports.default = Telegram;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ShareButton2 = __webpack_require__(0);

var _ShareButton3 = _interopRequireDefault(_ShareButton2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WhatsApp = function (_ShareButton) {
    _inherits(WhatsApp, _ShareButton);

    function WhatsApp(params) {
        _classCallCheck(this, WhatsApp);

        var _this = _possibleConstructorReturn(this, (WhatsApp.__proto__ || Object.getPrototypeOf(WhatsApp)).call(this));

        _this.params = params;
        return _this;
    }

    _createClass(WhatsApp, [{
        key: 'show',
        value: function show() {
            var url = this._getUrl();
            window.open(url);
        }
    }, {
        key: '_getUrl',
        value: function _getUrl() {
            var baseUrl = 'whatsapp://send?';
            var pageUrl = window.location.href;
            var text = this.params.text || document.title;

            return baseUrl + 'text=' + text + ' ' + pageUrl;
        }
    }]);

    return WhatsApp;
}(_ShareButton3.default);

exports.default = WhatsApp;

/***/ }),
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ShareButton2 = __webpack_require__(0);

var _ShareButton3 = _interopRequireDefault(_ShareButton2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
Тут необходим FB SDK
 */
var FBMessenger = function (_ShareButton) {
    _inherits(FBMessenger, _ShareButton);

    function FBMessenger(params) {
        _classCallCheck(this, FBMessenger);

        var _this = _possibleConstructorReturn(this, (FBMessenger.__proto__ || Object.getPrototypeOf(FBMessenger)).call(this));

        _this.params = params;
        return _this;
    }

    _createClass(FBMessenger, [{
        key: 'show',
        value: function show() {
            var url = this._getUrl();
            window.open(url);
        }
    }, {
        key: '_getUrl',
        value: function _getUrl() {
            var baseUrl = 'https://twitter.com/intent/tweet?';
            var pageUrl = window.location.href;
            var text = this.params.text || document.title;
            var hashtags = this.params.hashtags || '';

            return baseUrl + 'text=' + text + '&url=' + pageUrl + '&hashtags=' + hashtags;
        }
    }]);

    return FBMessenger;
}(_ShareButton3.default);

/*
https://www.facebook.com/dialog/send?app_id=140586622674265&link=https%3A%2F%2Fwww.rt.com%2Fnews%2F415690-no-other-word-but-racist-trumo%2F%23.WljCh-6Hv4c.messenger&redirect_uri=https%3A%2F%2Fwww.addthis.com%2Fmessengerredirect
 */


exports.default = FBMessenger;

/***/ })
/******/ ]);