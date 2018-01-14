import ShareButton from './ShareButton.js';

export default class Facebook extends ShareButton {
    constructor(element, params, htmlConstructor) {
        super(element);
        this.htmlConstructor = htmlConstructor;
        this.params = params;
        /**
         * test
         * ***/
        this._addCounterElement();
        this.counterElement.innerHTML = '5';
    }
    show() {
        const url = this._getUrl();
        this.showPopup(url);
    }
    _getUrl() {
        const baseUrl = 'https://www.facebook.com/sharer.php?';
        const pageUrl = window.location.href;
        const title = this.params.title || document.title;

        return `${baseUrl}src=sp&u=${pageUrl}&title=${encodeURIComponent(title)}`;
    }

    _addCounterElement() {
        this.counterElement = this.htmlConstructor.createCounterElement();
        this.element.insertBefore(this.counterElement, null);
    }
}
