class TextAnimator {
    constructor() {
        this.requestMessage = document.getElementById('requestMessage');
        if (!this.requestMessage) {
            console.error('Request message element not found');
            return;
        }
        this.text = 'Поставьте 5 по химии за Кислоты Пожааааааааалуста!';
        this.currentIndex = 0;
        this.init();
    }

    init() {
        this.typewriterEffect();
    }

    typewriterEffect() {
        if (this.currentIndex < this.text.length) {
            this.requestMessage.textContent += this.text.charAt(this.currentIndex);
            this.currentIndex++;
            setTimeout(() => this.typewriterEffect(), 100);
        } else {
            this.startColorCycle();
            this.startWobble();
        }
    }

    startColorCycle() {
        this.requestMessage.classList.add('animated');
    }

    startWobble() {
        setInterval(() => {
            this.requestMessage.classList.add('wobble');
            setTimeout(() => {
                this.requestMessage.classList.remove('wobble');
            }, 500);
        }, 5000);
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    new TextAnimator();
});
