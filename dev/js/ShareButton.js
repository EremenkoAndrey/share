export default class ShareButton {
    showPopup(url) {
        const popupWidth = 650;
        const winParams = `toolbar=0, 
                            status=0, 
                            width=${popupWidth}, 
                            height=450,
                            top=200,
                            left=${(window.innerWidth / 2) - (popupWidth / 2)}`;
        window.open(url, '', winParams);
    }
}
