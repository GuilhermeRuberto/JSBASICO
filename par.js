function checkEvenOdd() {
    const number = parseFloat(document.getElementById('number').value);

    if (isNaN(number)) {
        document.getElementById('numberResult').innerText = 'Please enter a valid number.';
        return;
    }

    const result = number % 2;
    let message = '';

    if (result === 0) {
        message = 'The number is even.';
    } else {
        message = 'The number is odd.';
    }

    document.getElementById('numberResult').innerText = message;
}