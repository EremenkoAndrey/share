import ShareButton from './ShareButton.js';

export default class Facebook extends ShareButton {
    constructor(params) {
        super(params);
        this.params = params;
    }
    show() {
        const url = this._getUrl();
        const popupWidth = 650;
        const winParams = `toolbar=0, 
                            status=0, 
                            width=${popupWidth}, 
                            height=450,
                            top=200,
                            left=${(window.innerWidth / 2) - (popupWidth / 2)}`;
        window.open(url, '', winParams);
    }
    _getUrl() {
        const baseUrl = 'https://www.facebook.com/sharer.php?';
        const pageUrl = window.location.href;
        const title = this.params.title || '';
        const description = this.params.description || '';

        return `${baseUrl}src=sp&u=${pageUrl}&title=${title}&description=${description}`;
    }
}
