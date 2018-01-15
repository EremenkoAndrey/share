import ShareButton from './ShareButton.js';
import checkExistProperty from './utils/checkExistProperty';

export default class Reddit extends ShareButton {
    constructor(element, params) {
        super(element);
        this.params = params;
        this.config = {
            shareUrl: 'https://www.reddit.com/submit?',
            serviceUrl: 'https://www.reddit.com/api/info.json?'
        };
    }
    show() {
        const url = this._getUrl();
        window.open(url);
    }
    _getUrl() {
        const pageUrl = window.location.href;
        const title = this.params.title || document.title;

        return `${this.config.shareUrl}title=${encodeURIComponent(title)}&url=${pageUrl}`;
    }

    addCounterElement(htmlConstructor) {
        this.getShareCount().then((res) => {
            if (checkExistProperty(res, 'res.data.children[0].data.score')) {
                this.counterElement = htmlConstructor.createCounterElement();
                this.element.insertBefore(this.counterElement, null);
                this.counterElement.innerHTML = res.data.children[0].data.score;
            }
        }).catch((err) => {
            console.log('err', err);
        });
    }

    getShareCount() {
        const url = `${this.config.serviceUrl}url=https://www.rt.com/news/415883-putin-communist-ideology-christianity/`;
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'GET'
            })
                .then(res => res.json(res))
                .then(json => resolve(json))
                .catch(err => reject(err));
        });
    }
}
