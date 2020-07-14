'use strict';

const weekDays = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const date = new Date();

weekDays.forEach((day, dayNumber) => {
    const outputDay = document.createElement('p');
    outputDay.innerHTML = day;
    document.body.appendChild(outputDay);

    if (dayNumber === 5 || dayNumber === 6) {
        outputDay.style.fontStyle = 'italic';
    }
    let currentDay = date.getDay();
    if (currentDay === 0) {
        currentDay = 7;
    }
    if (dayNumber === (currentDay - 1)) {
        outputDay.style.fontWeight = 'bold';
    }
});
