const isNumber = function (number) {
    return !isNaN(parseFloat(number)) && isFinite(number);
};

const guessRandomNumber = function() {

    const randomNumber = Math.floor(1 + Math.random() * 100);
    console.log(randomNumber);

    let attempts = 10;

    function quizFailed() {
        const repeatQuizFailed = confirm('Попытки закончились, хотите сыграть еще?');
        if (repeatQuizFailed) {
            const quiz = guessRandomNumber();
            quiz();
        } else {
            alert('До свидания!');
            return;
        }
    }

    function quizSuccessed() {
        const repeatQuizSucessed = confirm('Вы угадали число! Хотели бы сыграть еще?');
        if (repeatQuizSucessed) {
            attempts = 10;
            const quiz = guessRandomNumber();
            quiz();
        } else {
            alert('До свидания!');
            return;
        }
    }

    return function checkuserInput() {
        const userInput = prompt('Угадай чисто от 1 до 100', '100');

        if (userInput === null) {
            alert('До свидания!');
            return;
        }

        if (!isNumber(userInput)) {
            alert('Вы ввели не число');
        } else if (userInput > randomNumber) {
            attempts--;
            if (attempts <= 0) {
                quizFailed();
                return;
            }
            alert(`Загаданное число меньше. Осталось попыток: ${attempts}`);
        } else if (userInput < randomNumber) {
            attempts--;
            if (attempts <= 0) {
                quizFailed();
                return;
            }
            alert(`Загаданное число больше. Осталось попыток: ${attempts}`);
        } else if (userInput == randomNumber) {
            quizSuccessed();
            return;
        }
        checkuserInput();
    };
};

const quiz = guessRandomNumber();
quiz();
