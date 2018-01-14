import ShareButton from './ShareButton.js';
/*
 https://developers.facebook.com/docs/sharing/messenger/web
 */
export default class FBMessenger extends ShareButton {
    constructor(element, params) {
        super(element);
        this.params = params;
    }
    show() {
        const url = this._getUrl();
        window.open(url);
    }
    _getUrl() {
        const baseUrl = 'fb-messenger://share?';
        const pageUrl = window.location.href;
        const appId = 140586622674265;

        return `${baseUrl}link=${pageUrl}&app_id=${appId}`;
    }
}
