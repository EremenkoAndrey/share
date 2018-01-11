import ShareButton from './ShareButton.js';

export default class Facebook extends ShareButton {
    init(element) {
        console.log(this.title);
    }
    getUrl() {
        const baseUrl = 'https://www.facebook.com/sharer.php?';
        const pageUrl = window.location.href;
        const delimeter = '&';
    }
}
// 'https://www.facebook.com/sharer.php?' +
// 'src=sp&' +
// 'u=https%3A%2F%2Frussian.rt.com%962-strelba-fabrika-zalozhniki&' +
// 'title=%C2%AB%D0%920%D1%81%D1%82%D1%80%D0%B5%%BB%D0%BE%D0%BA&' +
// 'description=dsggsgsdgs&' +
// 'picture=&' +
// 'utm_source=share2
