import ShareButton from './ShareButton.js';

export default class Facebook extends ShareButton {
    constructor(params) {
        super();
        this.params = params;
    }
    show() {
        const url = this._getUrl();
        this.showPopup(url);
    }
    _getUrl() {
        const baseUrl = 'https://www.facebook.com/sharer.php?';
        const pageUrl = window.location.href;
        const title = this.params.title || document.title;

        return `${baseUrl}src=sp&u=${pageUrl}&title=${title}`;
    }
}
