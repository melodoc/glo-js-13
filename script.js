let num = 266219;

function multiplyDigits(inputNumber) {
    let convertNumber = Math.abs(inputNumber);
    let product = 1;

    if (Number.isInteger(convertNumber)) {

        for (let i = 0; convertNumber > 0; i++) {
            product = (convertNumber % 10) * product;
            convertNumber = Math.floor(convertNumber / 10);
        }
        return product;
    }
    else {
        return `You entered a real number ${num}. Please, enter integer number`;
    }
}

function exponentiation(inputNumber) {
    if (isNaN(inputNumber)) {
        return `Unable exponentiation of product digits ${num}. Please, enter integer number`;
    }
    else {
        inputNumber = (inputNumber) ** 3;
        return inputNumber;
    }
}

function printFirstTwoDigits(inputNumber) {
    if (isNaN(inputNumber)) {
        return `Unable to print first two digits of ${num}. Please, enter integer number`;
    }
    else if (inputNumber >= 10) {
        inputNumber = inputNumber.toString().slice(0,2);
        return inputNumber;
    }
    else {
        return `Unable to print the result because the number is single-valued`;
    }
}

let processedNumber = num;
processedNumber = multiplyDigits(processedNumber);
processedNumber = exponentiation(processedNumber);
processedNumber = printFirstTwoDigits(processedNumber);

console.log(processedNumber);