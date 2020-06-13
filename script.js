'use strict';

let isNumber = function (number) {
    return !isNaN(parseFloat(number)) && isFinite(number);
};

let checkQuizInput = function () {
    let quizInput = +prompt('Угадай чисто от 1 до 100', '100');
    let quizNumber = 55;

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

checkQuizInput();
