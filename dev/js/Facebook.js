import ShareButton from './ShareButton.js';
import checkExistProperty from './utils/checkExistProperty';
/*
Удалить жестко прописанную ссылку на страницу для шаринга
 */
export default class Facebook extends ShareButton {
    constructor(element, params) {
        super(element);
        this.params = params;
        this.config = {
            shareUrl: 'https://www.facebook.com/sharer.php?',
            serviceUrl: 'https://graph.facebook.com/?',
            accessKey: 'EAACEdEose0cBAGZBxsoZCO7PGRtJ0cCZAybcwUsFtSYvvDaDdHElm9VTv4JRg5LmcbTGmuiHK7SU0LbVdUtcR2iWp6VJuvld0VnYlnScJZCdADoiMFaC1GZCza5Q7vCIX3EuFnVJjSXetdVZC9QKxCkMtReZB20qhQgk28LDDIaJwI40sizfZA5smjaAwLm8cJu5ZBZCk1fIGhHwZDZD'
        };
    }
    show() {
        const url = this._getUrl();
        this.showPopup(url);
    }
    _getUrl() {
        const pageUrl = window.location.href;
        const title = this.params.title || document.title;

        return `${this.config.shareUrl}src=sp&u=${pageUrl}&title=${encodeURIComponent(title)}`;
    }

    addCounterElement(htmlConstructor) {
        this.getShareCount().then((res) => {
            if (checkExistProperty(res, 'res.share.share_count')) {
                this.counterElement = htmlConstructor.createCounterElement();
                this.element.insertBefore(this.counterElement, null);
                this.counterElement.innerHTML = res.share.share_count;
            }
        }).catch((err) => {
            console.log('err', err);
        });
    }

    getShareCount() {
        const url = `${this.config.serviceUrl}id=https://www.rt.com/news/415690-no-other-word-but-racist-trumo/&access_token=${this.config.accessKey}`;
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'GET',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json(res))
                .then(json => resolve(json))
                .catch(err => reject(err));
        });
    }
}
