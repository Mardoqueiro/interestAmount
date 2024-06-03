const form = document.querySelector('#calculate-interest');

form.addEventListener('submit', calculateInterest);

function calculateInterest(event) {
    event.preventDefault();

    const principal = parseFloat(form.elements.principal.value);
    const interestRate = parseFloat(form.elements.interest.value);
    const time = parseFloat(form.elements.time.value);

    if (isNaN(principal) || isNaN(interestRate) || isNaN(time)) {
        return;
    }

    const result = calculateInterestAmount(principal, interestRate, time);
    displayResult(result);
}

function calculateInterestAmount(principal, interestRate, time) {
    return principal * (interestRate / 100) * time;
}

function displayResult(result) {
    const resultElement = document.querySelector('#result');
    resultElement.textContent = `The interest amount is ${result.toFixed(2)}.`;
}
