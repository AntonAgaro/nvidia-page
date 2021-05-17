import ChangePictures from './modules/pictures';
import Modal from './modules/modals';
import SlideMenu from './modules/slide-menu';
import Forms from './modules/forms';

window.addEventListener('DOMContentLoaded', () => {
    const change = new ChangePictures('.main__wrapper-item-img');
    change.init();

    new Modal('.main__btn', '.overlay', '.popup__close').init();

    new SlideMenu('.header__burger', '#burger-back', '.slide').bindSlideMenu();

    new Forms('form').init();
});