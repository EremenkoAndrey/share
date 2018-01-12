import ShareButton from './ShareButton.js';

export default class Telegram extends ShareButton {
    constructor(params) {
        super();
        this.params = params;
    }
    show() {
        const url = this._getUrl();
        this.showPopup(url);
    }
    _getUrl() {
        const baseUrl = 'https://telegram.me/share/url?';
        const pageUrl = window.location.href;
        const text = this.params.text || document.title;

        return `${baseUrl}text=${text}&url=${pageUrl}`;
    }
}

/*

*/
