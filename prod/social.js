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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
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
    function ShareButton(element) {
        var _this = this;

        _classCallCheck(this, ShareButton);

        this.element = element;
        this.onClick(function () {
            return _this.show();
        });
    }

    _createClass(ShareButton, [{
        key: 'showPopup',
        value: function showPopup(url) {
            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            var popupWidth = params.width || 650;
            var winParams = 'toolbar=0, \n                            status=0, \n                            width=' + popupWidth + ', \n                            height=' + (params.height || 450) + ',\n                            top=' + (params.top || 200) + ',\n                            left=' + (window.innerWidth / 2 - popupWidth / 2);
            window.open(url, '', winParams);
        }
    }, {
        key: 'onClick',
        value: function onClick(callback) {
            this.element.addEventListener('click', callback);
        }
    }, {
        key: 'addCounter',
        value: function addCounter() {}
    }]);

    return ShareButton;
}();

exports.default = ShareButton;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = checkExistProperty;
/*
Принимает объект и строковое представление вложенного в объект свойства
Примеры:
const obj = {test1:{test5: true}};
checkExistProperty(obj, 'obj.test1.test5'); // true

const obj = {test1:[{test5: true}]};
checkExistProperty(obj, 'obj.test1[0].test5'); // true
checkExistProperty(obj, 'obj.test1.test5'); // false
return bool

 */
function checkExistProperty(obj, props) {
    var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

    var arrProps = void 0;
    if (typeof props === 'string') {
        var reg = /]\.|\[|\./;
        arrProps = props.split(reg);
    } else {
        arrProps = props;
    }

    if (Array.isArray(obj)) {
        var arrIndex = parseInt(arrProps[index], 10);
        var result = !isNaN(arrIndex) && typeof obj[arrIndex] !== 'undefined';

        if (result && arrProps[index + 1]) {
            return checkExistProperty(obj[arrProps[index]], props, index + 1);
        }
        return result;
    }

    if (obj.hasOwnProperty(arrProps[index]) && arrProps[index + 1]) {
        return checkExistProperty(obj[arrProps[index]], props, index + 1);
    }
    return obj.hasOwnProperty(arrProps[index]);
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(3);

var _HtmlMarkup = __webpack_require__(4);

var _HtmlMarkup2 = _interopRequireDefault(_HtmlMarkup);

var _Facebook = __webpack_require__(5);

var _Facebook2 = _interopRequireDefault(_Facebook);

var _Twitter = __webpack_require__(6);

var _Twitter2 = _interopRequireDefault(_Twitter);

var _Reddit = __webpack_require__(7);

var _Reddit2 = _interopRequireDefault(_Reddit);

var _GooglePlus = __webpack_require__(8);

var _GooglePlus2 = _interopRequireDefault(_GooglePlus);

var _Telegram = __webpack_require__(9);

var _Telegram2 = _interopRequireDefault(_Telegram);

var _WhatsApp = __webpack_require__(10);

var _WhatsApp2 = _interopRequireDefault(_WhatsApp);

var _FBMessenger = __webpack_require__(11);

var _FBMessenger2 = _interopRequireDefault(_FBMessenger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var config = {
    counters: true,
    classNames: {
        block: 'sharing',
        elements: 'sharing__item',
        links: 'sharing__link',
        counters: 'sharing__counter'
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
    function Socials(root, options) {
        _classCallCheck(this, Socials);

        this.root = root;
        this.options = options;
    }

    _createClass(Socials, [{
        key: 'init',
        value: function init() {
            var _options = this.options,
                classNames = _options.classNames,
                networks = _options.networks;

            this.htmlConstructor = new _HtmlMarkup2.default(classNames);
            var list = this._createElementsList(networks);
            this.root.insertBefore(list, null);
        }
    }, {
        key: '_initNetwork',
        value: function _initNetwork(element, name, params) {
            switch (name) {
                case 'facebook':
                    {
                        var facebook = new _Facebook2.default(element, params);
                        if (this.options.counters) {
                            facebook.addCounterElement(this.htmlConstructor);
                        }
                        return facebook;
                    }
                case 'google':
                    return new _GooglePlus2.default(element, params);
                case 'reddit':
                    {
                        var reddit = new _Reddit2.default(element, params);
                        if (this.options.counters) {
                            reddit.addCounterElement(this.htmlConstructor);
                        }
                        return reddit;
                    }
                case 'twitter':
                    return new _Twitter2.default(element, params);
                case 'telegram':
                    return new _Telegram2.default(element, params);
                case 'whatsapp':
                    return new _WhatsApp2.default(element, params);
                case 'fbmessenger':
                    return new _FBMessenger2.default(element, params);
                default:
                    return null;
            }
        }
    }, {
        key: '_createElementsList',
        value: function _createElementsList(networks) {
            var _this = this;

            var ul = this.htmlConstructor.createListElement();

            Object.keys(networks).forEach(function (network) {
                var el = _this.htmlConstructor.createItemElement(network);
                _this.htmlConstructor.addToList(el);
                _this._initNetwork(el, network, config.networks[network]);
            });
            return ul;
        }
    }]);

    return Socials;
}();

new Socials(document.getElementById('social-container'), config).init();

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HtmlMarkup = function () {
    function HtmlMarkup(classNames) {
        _classCallCheck(this, HtmlMarkup);

        this.blockClassName = classNames.block || 'sharing';
        this.elementClassName = classNames.elements || 'sharing__item';
        this.counterClassName = classNames.counters || 'sharing__counter';
        this.linkClassName = classNames.links || 'sharing__link';
    }

    _createClass(HtmlMarkup, [{
        key: 'createListElement',
        value: function createListElement() {
            this.listElement = document.createElement('ul');
            this.listElement.className = this.blockClassName;
            return this.listElement;
        }
    }, {
        key: 'createItemElement',
        value: function createItemElement(elementName) {
            var parentElement = document.createElement('li');
            parentElement.className = '' + this.elementClassName;
            parentElement.dataset.name = elementName;

            var childElement = document.createElement('span');
            childElement.className = this.linkClassName + ' ' + this.linkClassName + '_' + elementName;
            parentElement.insertBefore(childElement, null);
            return parentElement;
        }
    }, {
        key: 'createCounterElement',
        value: function createCounterElement() {
            var el = document.createElement('span');
            el.className = '' + this.counterClassName;
            return el;
        }
    }, {
        key: 'addToList',
        value: function addToList(element) {
            this.listElement.insertBefore(element, null);
        }
    }]);

    return HtmlMarkup;
}();

exports.default = HtmlMarkup;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ShareButton2 = __webpack_require__(0);

var _ShareButton3 = _interopRequireDefault(_ShareButton2);

var _checkExistProperty = __webpack_require__(1);

var _checkExistProperty2 = _interopRequireDefault(_checkExistProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
Удалить жестко прописанную ссылку на страницу для шаринга
 */
var Facebook = function (_ShareButton) {
    _inherits(Facebook, _ShareButton);

    function Facebook(element, params) {
        _classCallCheck(this, Facebook);

        var _this = _possibleConstructorReturn(this, (Facebook.__proto__ || Object.getPrototypeOf(Facebook)).call(this, element));

        _this.params = params;
        _this.config = {
            shareUrl: 'https://www.facebook.com/sharer.php?',
            serviceUrl: 'https://graph.facebook.com/?',
            accessKey: 'EAACEdEose0cBAGZBxsoZCO7PGRtJ0cCZAybcwUsFtSYvvDaDdHElm9VTv4JRg5LmcbTGmuiHK7SU0LbVdUtcR2iWp6VJuvld0VnYlnScJZCdADoiMFaC1GZCza5Q7vCIX3EuFnVJjSXetdVZC9QKxCkMtReZB20qhQgk28LDDIaJwI40sizfZA5smjaAwLm8cJu5ZBZCk1fIGhHwZDZD'
        };
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
            var pageUrl = window.location.href;
            var title = this.params.title || document.title;

            return this.config.shareUrl + 'src=sp&u=' + pageUrl + '&title=' + encodeURIComponent(title);
        }
    }, {
        key: 'addCounterElement',
        value: function addCounterElement(htmlConstructor) {
            var _this2 = this;

            this.getShareCount().then(function (res) {
                if ((0, _checkExistProperty2.default)(res, 'res.share.share_count')) {
                    _this2.counterElement = htmlConstructor.createCounterElement();
                    _this2.element.insertBefore(_this2.counterElement, null);
                    _this2.counterElement.innerHTML = res.share.share_count;
                }
            }).catch(function (err) {
                console.log('err', err);
            });
        }
    }, {
        key: 'getShareCount',
        value: function getShareCount() {
            var url = this.config.serviceUrl + 'id=https://www.rt.com/news/415690-no-other-word-but-racist-trumo/&access_token=' + this.config.accessKey;
            return new Promise(function (resolve, reject) {
                fetch(url, {
                    method: 'GET',
                    credentials: 'same-origin',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(function (res) {
                    return res.json(res);
                }).then(function (json) {
                    return resolve(json);
                }).catch(function (err) {
                    return reject(err);
                });
            });
        }
    }]);

    return Facebook;
}(_ShareButton3.default);

exports.default = Facebook;

/***/ }),
/* 6 */
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

    function Twitter(element, params) {
        _classCallCheck(this, Twitter);

        var _this = _possibleConstructorReturn(this, (Twitter.__proto__ || Object.getPrototypeOf(Twitter)).call(this, element));

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

            return baseUrl + 'text=' + encodeURIComponent(text) + '&url=' + pageUrl + '&hashtags=' + encodeURIComponent(hashtags);
        }
    }]);

    return Twitter;
}(_ShareButton3.default);

exports.default = Twitter;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ShareButton2 = __webpack_require__(0);

var _ShareButton3 = _interopRequireDefault(_ShareButton2);

var _checkExistProperty = __webpack_require__(1);

var _checkExistProperty2 = _interopRequireDefault(_checkExistProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Reddit = function (_ShareButton) {
    _inherits(Reddit, _ShareButton);

    function Reddit(element, params) {
        _classCallCheck(this, Reddit);

        var _this = _possibleConstructorReturn(this, (Reddit.__proto__ || Object.getPrototypeOf(Reddit)).call(this, element));

        _this.params = params;
        _this.config = {
            shareUrl: 'https://www.reddit.com/submit?',
            serviceUrl: 'https://www.reddit.com/api/info.json?'
        };
        return _this;
    }

    _createClass(Reddit, [{
        key: 'show',
        value: function show() {
            var url = this._getUrl();
            window.open(url);
        }
    }, {
        key: '_getUrl',
        value: function _getUrl() {
            var pageUrl = window.location.href;
            var title = this.params.title || document.title;

            return this.config.shareUrl + 'title=' + encodeURIComponent(title) + '&url=' + pageUrl;
        }
    }, {
        key: 'addCounterElement',
        value: function addCounterElement(htmlConstructor) {
            var _this2 = this;

            this.getShareCount().then(function (res) {
                if ((0, _checkExistProperty2.default)(res, 'res.data.children[0].data.score')) {
                    _this2.counterElement = htmlConstructor.createCounterElement();
                    _this2.element.insertBefore(_this2.counterElement, null);
                    _this2.counterElement.innerHTML = res.data.children[0].data.score;
                }
            }).catch(function (err) {
                console.log('err', err);
            });
        }
    }, {
        key: 'getShareCount',
        value: function getShareCount() {
            var url = this.config.serviceUrl + 'url=https://www.rt.com/news/415883-putin-communist-ideology-christianity/';
            return new Promise(function (resolve, reject) {
                fetch(url, {
                    method: 'GET'
                }).then(function (res) {
                    return res.json(res);
                }).then(function (json) {
                    return resolve(json);
                }).catch(function (err) {
                    return reject(err);
                });
            });
        }
    }]);

    return Reddit;
}(_ShareButton3.default);

exports.default = Reddit;

/***/ }),
/* 8 */
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

    function GooglePlus(element, params) {
        _classCallCheck(this, GooglePlus);

        var _this = _possibleConstructorReturn(this, (GooglePlus.__proto__ || Object.getPrototypeOf(GooglePlus)).call(this, element));

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

            return baseUrl + 't=' + encodeURIComponent(title) + '&url=' + pageUrl;
        }
    }]);

    return GooglePlus;
}(_ShareButton3.default);

exports.default = GooglePlus;

/***/ }),
/* 9 */
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

    function Telegram(element, params) {
        _classCallCheck(this, Telegram);

        var _this = _possibleConstructorReturn(this, (Telegram.__proto__ || Object.getPrototypeOf(Telegram)).call(this, element));

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

            return baseUrl + 'text=' + encodeURIComponent(text) + '&url=' + pageUrl;
        }
    }]);

    return Telegram;
}(_ShareButton3.default);

/*

*/


exports.default = Telegram;

/***/ }),
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

var WhatsApp = function (_ShareButton) {
    _inherits(WhatsApp, _ShareButton);

    function WhatsApp(element, params) {
        _classCallCheck(this, WhatsApp);

        var _this = _possibleConstructorReturn(this, (WhatsApp.__proto__ || Object.getPrototypeOf(WhatsApp)).call(this, element));

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
            var concatenatedText = text + ' ' + pageUrl;
            return baseUrl + 'text=' + encodeURIComponent(concatenatedText);
        }
    }]);

    return WhatsApp;
}(_ShareButton3.default);

exports.default = WhatsApp;

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

/*
 https://developers.facebook.com/docs/sharing/messenger/web
 */
var FBMessenger = function (_ShareButton) {
    _inherits(FBMessenger, _ShareButton);

    function FBMessenger(element, params) {
        _classCallCheck(this, FBMessenger);

        var _this = _possibleConstructorReturn(this, (FBMessenger.__proto__ || Object.getPrototypeOf(FBMessenger)).call(this, element));

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
            var baseUrl = 'fb-messenger://share?';
            var pageUrl = window.location.href;
            var appId = 140586622674265;

            return baseUrl + 'link=' + pageUrl + '&app_id=' + appId;
        }
    }]);

    return FBMessenger;
}(_ShareButton3.default);

exports.default = FBMessenger;

/***/ })
/******/ ]);