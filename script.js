'use strict';

const color = document.getElementById('color'),
    button = document.getElementById('change'),
    body = document.querySelector('body');

const randomInteger = (min, max) => {
    //To align the probability intervals,
    //it is needed to generate numbers from (min-0.5) to (max + 0.5)
    const rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
};

const calcDecimalToHex = decimal => Number(decimal).toString(16);

body.style = ` background-color: ${color.textContent}`;

button.addEventListener('click', () => {

    // It is needed to generate numbers from zero to 16777215
    // 0 - matches black in the HEX color system (000000)
    // 16777215 - matches white in the HEX color system (ffffff)

    const decimalNum = randomInteger(0, 16777215);
    const hexNum = calcDecimalToHex(decimalNum);

    color.innerText = '#' + hexNum;
    body.style = ` background-color: #${hexNum}`;

});
