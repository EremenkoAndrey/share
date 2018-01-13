import './index.less';
import HtmlMarkup from './js/HtmlMarkup';
import Facebook from './js/Facebook';
import Twitter from './js/Twitter';
import Reddit from './js/Reddit';
import GooglePlus from './js/GooglePlus';
import Telegram from './js/Telegram';
import WhatsApp from './js/WhatsApp';
import FBMessenger from './js/FBMessenger';

const config = {
    classNames: {
        block: 'sharing',
        elements: 'sharing__item',
        links: 'sharing__link',
        counters: 'sharing__counter'
    },
    networks: {
        facebook: {
            // Текст шаринга переопределяется
            title: ''
        },
        twitter: {
            // Текст шаринга
          //  text: 'Текст Твиттера',
            hashtags: ''
        },
        reddit: {
            // Текст шаринга
            title: 'Новость'
        },
        google: {
            // Текст шаринга
            title: 'Текст новости'
        },
        telegram: {
            // Текст шаринга
            text: 'Текст новости'
        },
        fbmessenger: {
            // Текст шаринга
            text: 'Текст новости'
        },
        whatsapp: {
            // Текст шаринга
            text: 'Текст новости'
        }
    }
};

class Socials {
    constructor(root, options) {
        this.root = root;
        this.options = options;
    }

    init() {
        const { classNames, networks } = this.options;
        this.htmlConstructor = new HtmlMarkup(classNames);
        const list = this._createElementsList(networks);
        this.root.insertBefore(list, null);
    }

    _initNetwork(element, name, params) {
        switch (name) {
        case 'facebook':
            return new Facebook(element, params, this.htmlConstructor);
        case 'google':
            return new GooglePlus(element, params);
        case 'reddit':
            return new Reddit(element, params);
        case 'twitter':
            return new Twitter(element, params);
        case 'telegram':
            return new Telegram(element, params);
        case 'whatsapp':
            return new WhatsApp(element, params);
        case 'fbmessenger':
            return new FBMessenger(element, params);
        default:
            return null;
        }
    }

    _createElementsList(networks) {
        const ul = this.htmlConstructor.createListElement();

        Object.keys(networks).forEach((network) => {
            const el = this.htmlConstructor.createItemElement(network);
            this.htmlConstructor.addToList(el);
            this._initNetwork(el, network, config.networks[network]);
        });
        return ul;
    }
}

new Socials(document.getElementById('social-container'), config).init();
