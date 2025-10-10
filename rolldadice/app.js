class DiceRoller {
    constructor() {
        this.currentSides = 6;
        this.isRolling = false;
        this.diceTypeNames = {
            6: 'Six-sided dice',
            8: 'Eight-sided dice', 
            10: 'Ten-sided dice',
            12: 'Twelve-sided dice',
            20: 'Twenty-sided dice'
        };
        this.initializeElements();
        this.bindEvents();
        this.updateDiceDisplay(1);
    }

    initializeElements() {
        this.dice = document.getElementById('dice');
        this.diceFace = document.getElementById('diceFace');
        this.resultText = document.getElementById('resultText');
        this.rollButton = document.getElementById('rollButton');
        this.diceLabel = document.getElementById('diceLabel');
        this.diceOptions = document.querySelectorAll('.dice-option');
    }

    bindEvents() {
        this.rollButton.addEventListener('click', () => this.rollDice());
        
        this.diceOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                this.diceOptions.forEach(opt => opt.classList.remove('active'));
                e.target.classList.add('active');
                this.currentSides = parseInt(e.target.dataset.sides);
                this.changeDiceType();
                this.updateDiceDisplay(1);
            });
        });
    }

    changeDiceType() {
        // Remove all dice classes
        this.dice.className = '';
        
        // Add the appropriate dice class
        this.dice.classList.add(`dice-d${this.currentSides}`);
        
        // Update label
        this.diceLabel.textContent = this.diceTypeNames[this.currentSides];
    }

    rollDice() {
        if (this.isRolling) return;

        this.isRolling = true;
        this.rollButton.disabled = true;

        // Add gentle rolling animation
        this.dice.classList.add('rolling');

        // Generate random result
        const result = Math.floor(Math.random() * this.currentSides) + 1;

        // Simulate rolling time
        setTimeout(() => {
            this.dice.classList.remove('rolling');
            this.updateDiceDisplay(result);
            this.showResult(result);
            this.isRolling = false;
            this.rollButton.disabled = false;
        }, 400);
    }

    updateDiceDisplay(number) {
        if (this.currentSides === 6) {
            this.createD6Face(number);
        } else {
            this.createNumberFace(number);
        }
    }

    createD6Face(number) {
        this.diceFace.innerHTML = '';
        const dotPositions = {
            1: [4],
            2: [0, 8],
            3: [0, 4, 8],
            4: [0, 2, 6, 8],
            5: [0, 2, 4, 6, 8],
            6: [0, 2, 3, 5, 6, 8]
        };

        // Create 3x3 grid
        for (let i = 0; i < 9; i++) {
            const dot = document.createElement('div');
            dot.className = 'dot';
            
            if (dotPositions[number].includes(i)) {
                dot.style.opacity = '1';
            } else {
                dot.style.opacity = '0';
            }
            
            this.diceFace.appendChild(dot);
        }
    }

    createNumberFace(number) {
        this.diceFace.innerHTML = `
            <div class="dice-number">${number}</div>
        `;
    }

    showResult(result) {
        this.resultText.textContent = `You rolled: ${result}`;
    }
}

class PlayerSelector {
    constructor() {
        this.currentInt = null;
        this.initializeElements();
        this.bindEvents();
    }
    initializeElements() {
        // interfaces
        this.maininterface = document.getElementById("main-int");
        this.playerinterface = null;
        this.welcomeint = document.getElementById("welcome-int");

        // Selection buttons
        this.Selectionbuttons = document.querySelectorAll(".selectionbut");
    }
    bindEvents() {
        this.Selectionbuttons.forEach(button => {
            button.addEventListener('click', (e) => {
                const currentInt = e.target.dataset
            })
        })
    }
}
// Initialize the dice roller when the page loads
document.addEventListener('DOMContentLoaded', () => {
    
});