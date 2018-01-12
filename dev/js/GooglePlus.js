import ShareButton from './ShareButton.js';

export default class GooglePlus extends ShareButton {
    constructor(params) {
        super();
        this.params = params;
    }
    show() {
        const url = this._getUrl();
        this.showPopup(url);
    }
    _getUrl() {
        const baseUrl = 'https://plus.google.com/share?';
        const pageUrl = window.location.href;
        const title = this.params.title || document.title;

        return `${baseUrl}t=${title}&url=${pageUrl}`;
    }
}
/*

*/