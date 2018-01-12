import ShareButton from './ShareButton.js';

export default class Twitter extends ShareButton {
    constructor(params) {
        super();
        this.params = params;
    }
    show() {
        const url = this._getUrl();
        this.showPopup(url);
    }
    _getUrl() {
        const baseUrl = 'https://twitter.com/intent/tweet?';
        const pageUrl = window.location.href;
        const text = this.params.text || document.title;
        const hashtags = this.params.hashtags || '';

        return `${baseUrl}text=${text}&url=${pageUrl}&hashtags=${hashtags}`;
    }
}
