const display = document.getElementById('display');
const displayContainer = document.getElementById('display-container');
const historyContainer = document.getElementById('history-container');
const buttons = document.getElementById('.button');
const historyItems = document.getElementById('.history-item');
function appendToDisplay(value) {
    display.value += value;
    display.classList.remove('error');
    localStorage.setItem('displayValue', display.value);
}

function clearDisplay() {
    display.value = '';
    display.classList.remove('error');
    localStorage.removeItem('displayValue');
}

function calculate() { 
    try {  
        if (display.value.trim() === '') {
            throw new Error('');
        }
        display.value = eval(display.value);
        localStorage.setItem('displayValue', display.value);
    } catch (error) {
        if (error instanceof SyntaxError) {
            display.value = '';
        } else if (error.message === 'Empty input') {
            display.value = 'Empty Input';
        }
        display.classList.add('error');
    }
}
function historyNewDisplay() {
    historyContainer.style.display = 'block';
    displayContainer.style.display = 'none';
}
function returnToDisplay() {
    historyContainer.style.display = 'none';
    displayContainer.style.display = 'block';
}
display.value = localStorage.getItem('displayValue') || '';