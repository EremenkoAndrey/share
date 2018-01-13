import ShareButton from './ShareButton.js';
/*
Тут необходим FB SDK
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
        const baseUrl = 'https://twitter.com/intent/tweet?';
        const pageUrl = window.location.href;
        const text = this.params.text || document.title;
        const hashtags = this.params.hashtags || '';

        return `${baseUrl}text=${text}&url=${pageUrl}&hashtags=${hashtags}`;
    }
}

/*
https://www.facebook.com/dialog/send?app_id=140586622674265&link=https%3A%2F%2Fwww.rt.com%2Fnews%2F415690-no-other-word-but-racist-trumo%2F%23.WljCh-6Hv4c.messenger&redirect_uri=https%3A%2F%2Fwww.addthis.com%2Fmessengerredirect
 */
