'use strict';

const declOfNum = (number, titles) => {
    const cases = [2, 0, 1, 1, 1, 2];
    return titles[
        (number % 100 > 4 && number % 100 < 20)
            ?
            2
            :
            cases[(number % 10 < 5) ? number % 10 : 5]
    ];
};


const getFullDate = () => {

    const now = new Date();

    const weekDays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
        weekDay = weekDays[now.getDay()];

    const day = now.getDate();

    const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Ноября', 'Декабря'],
        month = months[now.getMonth()];

    const year = now.getFullYear();

    const hours = ['час', 'часа', 'часов'],
        hour = now.getHours(),
        declHours = declOfNum(hour, hours);

    const minutes = ['минута', 'минуты', 'минут'],
        minute = now.getMinutes(),
        declMinutes = declOfNum(minute, minutes);

    const seconds = ['секунда', 'секунды', 'секунд'],
        second = now.getSeconds(),
        declSeconds = declOfNum(second, seconds);


    return `Сегодня ${weekDay}, ${day} ${month} ${year} года, ${hour} ${declHours} ${minute} ${declMinutes} ${second} ${declSeconds}`;
};

const modifyZeroDigit = inputDigit => {
    if (inputDigit >= 0 && inputDigit < 10) {
        return '0' + inputDigit;
    }
    return inputDigit;
};


const getShortDate = () => {
    const now = new Date();

    const day = modifyZeroDigit(now.getDate());
    const month = modifyZeroDigit(now.getMonth());
    const year = modifyZeroDigit(now.getFullYear());

    const hour = modifyZeroDigit(now.getHours());
    const minute = modifyZeroDigit(now.getMinutes());
    const second = modifyZeroDigit(now.getSeconds());

    return `${day}.${month}.${year} - ${hour}:${minute}:${second}`;
};


const fullDate = document.createElement('p');
const shortDate = document.createElement('p');

fullDate.innerHTML = getFullDate();
shortDate.innerHTML = getShortDate();

document.body.appendChild(fullDate);
document.body.appendChild(shortDate);
