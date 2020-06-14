'use strict';

let isNumber = function (number) {
    return !isNaN(parseFloat(number)) && isFinite(number);
};

let randomInteger = function (min, max) {
    let rand = Math.floor(min + Math.random() * (max + 1 - min));
    return rand;
};

let guessRandomNumber = function () {

    let quizNumber = randomInteger(1, 100);

    let checkQuizInput = function () {
        let quizInput = +prompt('Угадай чисто от 1 до 100', '100');

        if (quizInput === quizNumber) {
            confirm('Вы угадали число');
            return;
        }

        if (!isNumber(quizInput)) {
            alert('Вы ввели не число');
        }

        if (quizInput > quizNumber) {
            alert('Загаданное число меньше');
        }

        if (quizInput < quizNumber) {
            alert('Загаданное число больше');
        }
        checkQuizInput();
    };

    return checkQuizInput;
};

let quiz = guessRandomNumber();
quiz();