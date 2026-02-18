class InteractionHandler {
    constructor() {
        this.init();
    }

    init() {
        this.setupFormulaHovers();
        this.setupMoleculeClicks();
        this.setupElementCards();
    }

    setupFormulaHovers() {
        const formulas = document.querySelectorAll('.formula');
        formulas.forEach(formula => {
            formula.addEventListener('mouseenter', (e) => {
                e.target.style.opacity = '1';
            });
            formula.addEventListener('mouseleave', (e) => {
                e.target.style.opacity = '0.3';
            });
            formula.addEventListener('click', (e) => {
                this.createSparkles(e.target);
            });
        });
    }

    setupMoleculeClicks() {
        const molecules = document.querySelectorAll('.molecule-left, .molecule-right');
        molecules.forEach(molecule => {
            molecule.addEventListener('click', (e) => {
                e.currentTarget.classList.add('molecule-spin');
                setTimeout(() => {
                    e.currentTarget.classList.remove('molecule-spin');
                }, 1000);
            });
        });
    }

    setupElementCards() {
        const elements = document.querySelectorAll('.element-card');
        elements.forEach(element => {
            element.addEventListener('click', (e) => {
                const card = e.currentTarget;
                card.classList.add('clicked');
                
                // Change colors randomly
                const colors = ['#60a5fa', '#3b82f6', '#a78bfa', '#8b5cf6'];
                const randomColor = colors[Math.floor(Math.random() * colors.length)];
                card.style.borderColor = randomColor;
                
                // Create particle effect
                this.createParticles(card);
                
                setTimeout(() => {
                    card.classList.remove('clicked');
                }, 500);
            });
        });
    }

    createSparkles(element) {
        for (let i = 0; i < 5; i++) {
            const sparkle = document.createElement('div');
            sparkle.style.position = 'absolute';
            sparkle.style.width = '8px';
            sparkle.style.height = '8px';
            sparkle.style.background = '#60a5fa';
            sparkle.style.borderRadius = '50%';
            sparkle.style.pointerEvents = 'none';
            
            const rect = element.getBoundingClientRect();
            sparkle.style.left = rect.left + rect.width / 2 + 'px';
            sparkle.style.top = rect.top + rect.height / 2 + 'px';
            
            document.body.appendChild(sparkle);
            
            const angle = (Math.PI * 2 * i) / 5;
            const distance = 40;
            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;
            
            sparkle.animate([
                { transform: 'translate(0, 0) scale(1)', opacity: 1 },
                { transform: `translate(${x}px, ${y}px) scale(0)`, opacity: 0 }
            ], {
                duration: 500,
                easing: 'ease-out'
            }).onfinish = () => sparkle.remove();
        }
    }

    createParticles(element) {
        for (let i = 0; i < 6; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = '5px';
            particle.style.height = '5px';
            particle.style.background = '#a78bfa';
            particle.style.borderRadius = '50%';
            particle.style.pointerEvents = 'none';
            
            const rect = element.getBoundingClientRect();
            particle.style.left = rect.left + rect.width / 2 + 'px';
            particle.style.top = rect.top + rect.height / 2 + 'px';
            
            document.body.appendChild(particle);
            
            const angle = (Math.PI * 2 * i) / 6;
            const distance = 35;
            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;
            
            particle.animate([
                { transform: 'translate(0, 0) scale(1)', opacity: 1 },
                { transform: `translate(${x}px, ${y}px) scale(0)`, opacity: 0 }
            ], {
                duration: 400,
                easing: 'ease-out'
            }).onfinish = () => particle.remove();
        }
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    new InteractionHandler();
});
