function calculator(num1, num2, operator) {
    if (operator == '+') {
        return num1 + num2
    } else if (operator == '-') {
        return num1 - num2
    } else if (operator == '*') {
        return num1 * num2
    } else if (operator == '/') {
        return num1 / num2
    } else {
        console.log('Wrong operator!')
    }
}

module.exports = calculator;
