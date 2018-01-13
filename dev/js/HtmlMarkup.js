export default class HtmlMarkup {
    constructor(classNames) {
        this.blockClassName = classNames.block || 'sharing';
        this.elementClassName = classNames.elements || 'sharing__item';
        this.counterClassName = classNames.counters || 'sharing__counter';
        this.linkClassName = classNames.links || 'sharing__link';
    }

    createListElement() {
        this.listElement = document.createElement('ul');
        this.listElement.className = this.blockClassName;
        return this.listElement;
    }

    createItemElement(elementName) {
        const parentElement = document.createElement('li');
        parentElement.className = `${this.elementClassName}`;
        parentElement.dataset.name = elementName;

        const childElement = document.createElement('span');
        childElement.className = `${this.linkClassName} ${this.linkClassName}_${elementName}`;
        parentElement.insertBefore(childElement, null);
        return parentElement;
    }

    createCounterElement() {
        const el = document.createElement('span');
        el.className = `${this.counterClassName}`;
        return el;
    }

    addToList(element) {
        this.listElement.insertBefore(element, null);
    }
}
