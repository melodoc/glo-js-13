'use strict';

const currentDate = new Date();

const convertFirstLetterSpelling = (inputWord) => {
    return inputWord[0].toUpperCase() + inputWord.slice(1).toLowerCase();
};

const getTimeOfDay = () => {
    const currentHour = currentDate.getHours();
    let timeOfDay;

    if (currentHour < 5 || currentHour > 22) {
        timeOfDay = 'Доброй ночи';
    } else if (currentHour < 11) {
        timeOfDay = 'Доброе утро';
    } else if (currentHour < 18) {
        timeOfDay = 'Добрый день';
    } else {
        timeOfDay = 'Добрый вечер';
    }

    return timeOfDay;
};

function getDaysUntilNewYear() {
    let newYearDate = new Date(currentDate.getFullYear() + 1, 0, 1).getTime();
    let todayDate = currentDate.getTime();
    let timeRemaining = (newYearDate - todayDate) / 1000;
    let newYearDaysLeft = Math.floor(timeRemaining / 60 / 60 / 24);
    return newYearDaysLeft;
}

const getDeclinableDay = (inputDay) => {
    const declinableDays = [[0, 5, 6, 7, 8, 9], [1], [2, 3, 4]];
    const declinableWords = ['дней', 'день', 'дня'];

    let declinedDay;
    let lastDigitDay = inputDay % 10;

    if (inputDay < 20) {
        declinedDay = 'дней';
    } else {
        for (let key in declinableDays) {
            if (declinableDays[key].includes(lastDigitDay)) {
                declinedDay = declinableWords[key];
                break;
            }
        }
    }
    return declinedDay;
};

const formattedWeekday = convertFirstLetterSpelling(currentDate.toLocaleString('ru', {
    weekday: 'long'
}));

const formattedTodayDate = currentDate.toLocaleString('ru', {
    timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true
});

const timeOfDayPara = document.createElement('p'),
    weekdayPara = document.createElement('p'),
    currentTimePara = document.createElement('p'),
    newYearDaysLeftPara = document.createElement('p'),
    daysUntilNewYear = getDaysUntilNewYear(),
    body = document.querySelector('body');

body.style = `font-size: 18px; 
                      font-family: "proxima-nova", "Lato", Helvetica, Arial, sans-serif;
                      font-weight: normal;
                      font-style: italic;`;


timeOfDayPara.textContent = getTimeOfDay();
weekdayPara.textContent = 'Сегодня: ' + formattedWeekday;
currentTimePara.textContent = 'Текущее время: ' + formattedTodayDate;
newYearDaysLeftPara.textContent = `До нового года осталось ${daysUntilNewYear} ${getDeclinableDay(daysUntilNewYear)}`;

body.append(timeOfDayPara);
body.append(weekdayPara);
body.append(currentTimePara);
body.append(newYearDaysLeftPara);
