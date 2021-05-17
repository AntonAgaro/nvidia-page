export default class ChangePictures {
    constructor(images) {
        this.images = document.querySelectorAll(images);
    }

    changeImage(image, index) {
        this.images.forEach(() => {
            image.addEventListener('mouseenter', () => {
                image.src = `images/main/hover/${index + 1}.svg`;
            });
        });
    }

    returnImage(image, src) {
        image.addEventListener('mouseleave', () => {
            image.src = src;
        });
    }

    init() {
        this.images.forEach((image, index) => {
            const src = image.getAttribute('src');
            this.changeImage(image, index);
            this.returnImage(image, src);
        });
    }

}