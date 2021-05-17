export default class SlideMenu {
    constructor(triggerSelector, burgerBackSelector, menu) {
        this.trigger = document.querySelector(triggerSelector);
        this.burgerBack = document.querySelector(burgerBackSelector);
        this.menu = document.querySelector(menu);
    }

    showMenu() {
        this.menu.classList.toggle('flex');
    }

    addActiveBurger() {
        this.burgerBack.classList.toggle('burger-green');
    }

    bindSlideMenu() {
        this.trigger.addEventListener('click', () => {
            this.showMenu();
            this.addActiveBurger();
        });
    }


}