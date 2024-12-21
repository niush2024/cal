// calculator.js

// Current input and previous input storage
let currentInput = '';
let previousInput = '';
let operator = '';

/**
 * Append number to the current input
 * @param {number|string} num 
 */
function appendNumber(num) {
    // Prevent multiple decimals
    if (num === '.' && currentInput.includes('.')) return;
    currentInput += num;
    updateResult();
}

/**
 * Perform operation
 * @param {string} op 
 */
function operation(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

/**
 * Update the result display
 */
function updateResult() {
    document.getElementById('result').value = currentInput;
}

/**
 * Clear the result display
 */
function clearResult() {
    currentInput = '';
    previousInput = '';
    operator = '';
    updateResult();
}

/**
 * Delete the last character
 */
function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateResult();
}

/**
 * Calculate the result of the operation
 */
function calculate() {
    let computation;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            computation = current === 0 ? 'Error' : prev / current;
            break;
        default:
            return;
    }
    currentInput = computation.toString();
    operator = '';
    previousInput = '';
    updateResult();
}