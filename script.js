let display = document.getElementById('display');
let buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('number') || button.classList.contains('operator')) {
            addToDisplay(button.textContent);
        } else if (button.classList.contains('decimal')) {
            addDecimal();
        } else if (button.classList.contains('clear')) {
            clearDisplay();
        } else if (button.classList.contains('delete')) {
            deleteLastCharacter();
        } else if (button.classList.contains('equals')) {
            calculate();
        }
    });
});

function addToDisplay(value) {
    if (display.value === '0') {
        display.value = value;
    } else {
        display.value += value;
    }
}

function addDecimal() {
    let lastNumber = display.value.split(/[\+\-\*\/]/).pop(); // Get the last number in the display
    if (!lastNumber.includes('.')) {
        addToDisplay('.');
    }
}

function clearDisplay() {
    display.value = '0';
}

function deleteLastCharacter() {
    display.value = display.value.slice(0, -1); // Remove the last character
    if (display.value === '') {
        display.value = '0';
    }
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
