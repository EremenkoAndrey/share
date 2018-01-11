import './index.less';
import Facebook from './js/Facebook';

const config = {
    blockClassName: 'sharing',
    elementClassName: 'item',
    networks: {
        facebook: {

        }
    }
};

class Socials {
    create(element, options) {
        const css = {
            block: options.blockClassName || 'sharing',
            element: options.elementClassName ? `${options.blockClassName}__${options.elementClassName}` : 'sharing__item'
        };
        const ul = document.createElement('ul');
        ul.className = css.block;

        Object.keys(options.networks).forEach((network) => {
            const el = document.createElement('li');
            el.className = `${css.element} ${css.element}_${network}`;
            this.initNetwork(network, el);
            ul.insertBefore(el, null);
        });
        element.insertBefore(ul, null);
    }

    initNetwork(name, element) {
        switch (name) {
        case 'facebook':
            new Facebook().init(element);
            return true;
        default:
            return false;
        }
    }
}

new Socials().create(document.getElementById('social-container'), config);
