export default class Forms {
    constructor(forms) {
        this.forms = document.querySelectorAll(forms);
        this.inputs = document.querySelectorAll('inputs');
        this.path = 'server/question.php';
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

                const formData = new FormData(form);

                this.postData(this.path, formData)
                    .then(res => console.log(res))
                    .catch(() => {
                        console.log('fail');
                    })
                    .finally(this.clearInputs());
            });
        });
    }
}