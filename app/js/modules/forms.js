import Modal from './modals';

export default class Forms extends Modal {
    constructor(forms) {
        super();
        this.forms = document.querySelectorAll(forms);
        this.inputs = document.querySelectorAll('.popup__form-input');
        this.path = 'server/question.php';
        this.message = {
            loading: 'Loading',
            success: 'Thank you! We will contact you soon!',
            failure: 'Something went wrong',
        };
        this.modal = document.querySelector('.overlay');
    }

    clearInputs() {
        this.inputs.forEach(input => {
            input.value = '';
        });
    }

    async postData(url, data) {
        let response = await fetch(url, {
            method: 'POST',
            body: data
        });

        return await response.text();
    }

    init() {
        this.forms.forEach(form => {
            form.addEventListener('submit', (event) => {
                event.preventDefault();
                
                const btn = form.querySelector(`.popup__btn`);
                let statusMessage = document.createElement('div');
                statusMessage.style.cssText = `
                    margin: 20px auto 0 auto;
                    padding: 14px 0 14px 20px;
                    font-family: Roboto;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 28px;
                    letter-spacing: 0.3px;
                    color: #fff;
                `;
                btn.replaceWith(statusMessage);
                statusMessage.textContent = this.message.loading;

                const formData = new FormData(form);

                this.postData(this.path, formData)
                    .then(res => {
                        console.log(res);
                        if (!res.ok) {
                            throw new Error('error');
                        }
                        statusMessage.textContent = this.message.success;
                        setTimeout(() => {
                            statusMessage.replaceWith(btn);
                            super.closeModal(this.modal);
                        }, 3000);

                    })
                    .catch(() => {
                        console.log('fail');
                        statusMessage.textContent = this.message.failure;
                        setTimeout(() => {
                            statusMessage.replaceWith(btn);
                            super.closeModal(this.modal);
                        }, 3000);
                    })
                    .finally(() => {
                        this.clearInputs();
                    });
            });
        });
    }
}