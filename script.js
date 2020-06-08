'use strict';
// first task

// if and switch-case solutions with week defenition

let lang = document.documentElement.lang;
let ruWeek = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
let enWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let date = new Date();

function getWeekDay(date, weekLang) {
    date = date || new Date();
    let days = weekLang;
    let day = date.getDay();
    return days[day];
}

if (lang === 'ru') {
    console.log('Сегодня ' + getWeekDay(date, ruWeek));
}
else if (lang === 'en') {
    console.log('Today is ' + getWeekDay(date, enWeek));
}
else {
    console.log('Язык не поддерживается');
}

switch (lang) {
    case 'ru':
        console.log('Сегодня ' + getWeekDay(date, ruWeek));
        break;
    case 'en':
        console.log('Today is ' + getWeekDay(date, enWeek));
        break;
    default:
        console.log('Язык не поддерживается');
        break;
}

// array solution

let langWeeks = {
    'ru': ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
    'en': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
};

console.log(`${lang}: ` + langWeeks[lang]);

//second task

let namePerson = prompt('Введите имя', 'Артем');

let result = (namePerson === 'Артем') ? 'директор' :
             (namePerson === 'Максим') ? 'преподаватель' :
             'студент';

console.log(result);