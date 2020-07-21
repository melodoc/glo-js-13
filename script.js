

const isNumber = function(number) {
    return !isNaN(parseFloat(number)) && isFinite(number);
};

const randomInteger = function(min, max) {
    const rand = Math.floor(min + Math.random() * (max + 1 - min));
    return rand;
};

const guessRandomNumber = function() {

    const randomNumber = Math.floor(1 + Math.random() * 100);
    console.log(randomNumber);

    let attempts = 10;

    const checkuserInput = function() {
        const userInput = prompt('Угадай чисто от 1 до 100', '100');
        const quizFailed = 'Попытки закончились, хотите сыграть еще?';
        const quizSucessed = 'Вы угадали число! Хотели бы сыграть еще?';

        if (userInput === null) {
            alert('До свидания! 1');
            return;
        }

        if (!isNumber(userInput)) {
            alert('Вы ввели не число');
        } else if (userInput > randomNumber) {
            attempts--;
            if (attempts <= 0) {
                const isRepeatQuizFailed = confirm(quizFailed);
                if (isRepeatQuizFailed) {
                    attempts = 10;
                    const quiz = guessRandomNumber();
                    quiz();

                } else {
                    alert('До свидания! 2');
                    return;
                }
            } alert(`Загаданное число меньше. Осталось попыток: ${attempts}`);
        } else if (userInput < randomNumber) {
            attempts--;
            if (attempts <= 0) {
                const isRepeatQuizFailed = confirm(quizFailed);
                if (isRepeatQuizFailed) {
                    const quiz = guessRandomNumber();
                    quiz();

                } else {
                    alert('До свидания! 3');
                    return;
                }
            } alert(`Загаданное число больше.Осталось попыток: ${attempts}`);
        } else if (userInput == randomNumber) {
            const isRepeatQuizSucessed = confirm(quizSucessed);
            if (isRepeatQuizSucessed) {
                attempts = 10;
                const quiz = guessRandomNumber();
                quiz();
            } else {
                alert('До свидания! 4');
                return;
            }
        }
        //return;
        checkuserInput();
    };

    return checkuserInput;
};

const quiz = guessRandomNumber();
quiz();
