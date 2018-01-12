import ShareButton from './ShareButton.js';

export default class Reddit extends ShareButton {
    constructor(params) {
        super();
        this.params = params;
    }
    show() {
        const url = this._getUrl();
        this.showPopup(url);
    }
    _getUrl() {
        const baseUrl = 'https://www.reddit.com/submit?';
        const pageUrl = window.location.href;
        const title = this.params.title || document.title;

        return `${baseUrl}title=${title}&url=${pageUrl}`;
    }
}
