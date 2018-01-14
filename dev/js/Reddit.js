import ShareButton from './ShareButton.js';

export default class Reddit extends ShareButton {
    constructor(element, params) {
        super(element);
        this.params = params;
    }
    show() {
        const url = this._getUrl();
        window.open(url);
    }
    _getUrl() {
        const baseUrl = 'https://www.reddit.com/submit?';
        const pageUrl = window.location.href;
        const title = this.params.title || document.title;

        return `${baseUrl}title=${encodeURIComponent(title)}&url=${pageUrl}`;
    }
}
