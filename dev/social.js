import './index.less';
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
        elements: 'sharing__item'
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
    constructor(element, options) {
        this.element = element;
        this.options = options;
    }

    init() {
        const { classNames, networks } = this.options;
        const list = this._createElementsList(networks, classNames);
        this.element.insertBefore(list, null);
        list.addEventListener('click', (event) => {
            if (!event.target.dataset.name) return;
            const networkName = event.target.dataset.name;
            this._initNetwork(networkName, config.networks[networkName]);
        });
    }

    _initNetwork(name, params) {
        switch (name) {
        case 'facebook':
            new Facebook(params).show();
            return true;
        case 'google':
            new GooglePlus(params).show();
            return true;
        case 'reddit':
            new Reddit(params).show();
            return true;
        case 'twitter':
            new Twitter(params).show();
            return true;
        case 'telegram':
            new Telegram(params).show();
            return true;
        case 'whatsapp':
            new WhatsApp(params).show();
            return true;
        case 'fbmessenger':
            new FBMessenger(params).show();
            return true;
        default:
            return false;
        }
    }

    _createElementsList(networks, classNames) {
        const css = {
            block: classNames.block || 'sharing',
            element: classNames.elements ? `${classNames.elements}` : 'sharing__item'
        };
        const ul = document.createElement('ul');
        ul.className = css.block;

        Object.keys(networks).forEach((network) => {
            const el = document.createElement('li');
            el.className = `${css.element} ${css.element}_${network}`;
            el.dataset.name = network;
            ul.insertBefore(el, null);
        });
        return ul;
    }
}

document.getElementsByName('title');
new Socials(document.getElementById('social-container'), config).init();
