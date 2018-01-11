import './index.less';
import Facebook from './js/Facebook';

const config = {
    classNames: {
        block: 'sharing',
        elements: 'sharing__item'
    },
    networks: {
        facebook: {
            title: "title",
            description: "description"
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

new Socials(document.getElementById('social-container'), config).init();
