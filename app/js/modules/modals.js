export default class Modal {
    constructor(triggerSelector, modalSelector, closeSelector) {
        this.trigger = document.querySelector(triggerSelector);
        this.modal = document.querySelector(modalSelector);
        this.closeBtn = document.querySelector(closeSelector);
        this.scroll = this.calcScroll();
    }

    showModal() {
        console.log(this.scroll);
        this.modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${this.scroll}px`;
    }

    closeModal(popup) {
        popup.style.display = 'none';
        document.body.style.overflow = '';
        document.body.style.marginRight = '0';
    }

    calcScroll() {
        let div = document.createElement('div');
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.append(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();
        
        return scrollWidth;
    }

    init() {
        this.trigger.addEventListener('click', () => {
            this.showModal();
        });

        this.closeBtn.addEventListener('click', () => {
            this.closeModal(this.modal);
        });

        this.modal.addEventListener('click', (e) => {
            if (e.target.classList.contains('overlay')) {
                this.closeModal(this.modal); 
            }

        });
    }

}