import ShareButton from './ShareButton.js';

export default class WhatsApp extends ShareButton {
    constructor(element, params) {
        super(element);
        this.params = params;
    }
    show() {
        const url = this._getUrl();
        window.open(url);
    }
    _getUrl() {
        const baseUrl = 'whatsapp://send?';
        const pageUrl = window.location.href;
        const text = this.params.text || document.title;

        return `${baseUrl}text=${text} ${pageUrl}`;
    }
}
