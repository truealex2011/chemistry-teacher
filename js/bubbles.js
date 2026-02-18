class BubbleGenerator {
    constructor(containerSelector, count = 15) {
        this.container = document.querySelector(containerSelector);
        if (!this.container) {
            console.error('Bubbles container not found');
            return;
        }
        this.count = count;
        this.bubbles = [];
        this.init();
    }

    init() {
        // Adjust bubble count for mobile
        if (window.innerWidth < 768) {
            this.count = Math.floor(this.count / 2);
        }
        
        this.generateBubbles();
        this.startAnimation();
    }

    generateBubbles() {
        for (let i = 0; i < this.count; i++) {
            const bubble = this.createBubble();
            this.bubbles.push(bubble);
            this.container.appendChild(bubble);
        }
    }

    createBubble() {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        
        // Random properties
        const size = this.randomRange(10, 40);
        const left = this.randomRange(0, 100);
        const duration = this.randomRange(5, 10);
        const delay = this.randomRange(0, 5);
        const drift = this.randomRange(-50, 50);
        
        // Apply styles
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${left}%`;
        bubble.style.setProperty('--duration', `${duration}s`);
        bubble.style.setProperty('--delay', `${delay}s`);
        bubble.style.setProperty('--bubble-drift', `${drift}px`);
        
        return bubble;
    }

    randomRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    startAnimation() {
        // Bubbles animate via CSS, no JS needed
        console.log(`${this.count} bubbles generated and animating`);
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    new BubbleGenerator('.bubbles-container', 15);
});
