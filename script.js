'use strict';

let isNumber = function (number) {
    return !isNaN(parseFloat(number)) && isFinite(number);
};

let randomInteger = function (min, max) {
    let rand = Math.floor(min + Math.random() * (max + 1 - min));
    return rand;
};

let guessRandomNumber = function (generateNumberFunc) {

    let quizNumber = generateNumberFunc;
    console.log(quizNumber);

    let checkQuizInput = function () {
        let quizInput = prompt('Угадай чисто от 1 до 100', '100');

        if (quizInput === null) {
            alert('До свидания!');
            return;
        }

        if (!isNumber(quizInput)) {
            alert('Вы ввели не число');
        } else if (quizInput > quizNumber) {
            alert('Загаданное число меньше');
        } else if (quizInput < quizNumber) {
            alert('Загаданное число больше');
        } else if (quizInput == quizNumber) {
            confirm('Вы угадали число');
            return;
        }               
        checkQuizInput();
    };

    return checkQuizInput;
};

let quiz = guessRandomNumber(randomInteger(1, 100));
quiz();