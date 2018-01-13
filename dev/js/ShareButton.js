export default class ShareButton {
    constructor(element) {
        this.element = element;
        this.onClick(() => this.show());
    }

    showPopup(url, params = {}) {
        const popupWidth = params.width || 650;
        const winParams = `toolbar=0, 
                            status=0, 
                            width=${popupWidth}, 
                            height=${params.height || 450},
                            top=${params.top || 200},
                            left=${(window.innerWidth / 2) - (popupWidth / 2)}`;
        window.open(url, '', winParams);
    }

    onClick(callback) {
        this.element.addEventListener('click', callback);
    }

    addCounter() {

    }
}
