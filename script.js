'use strict';

let money = prompt('Ваш месячный доход?', 30000);
let income = 'Фриланс';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую',
    'Интернет, транспорт, коммунальные услуги');
let deposit = confirm('Есть ли у вас депозит в банке?');
let mission = 100000;
let period = 12;

console.log('Тип переменной "money": ' + typeof money);
console.log('Тип переменной "income": ' + typeof income);
console.log('Тип переменной "deposit": ' + typeof deposit);
console.log('Длина строки "addExpenses": ' + addExpenses.length);
console.log(`Период в месяцах равен: ${period}`);
console.log(`Цель: заработать ${mission} ₽`);

addExpenses = addExpenses.toLocaleLowerCase();
addExpenses = addExpenses.split(', ');
console.log('Статьи расхода: ' + addExpenses);

let mandatoryExpense1 = prompt('Введите первую обязательную статью расходов', 'Еда');
let mandatoryAmount1 = prompt('Во сколько это обойдется?', 3000);
let mandatoryExpense2 = prompt('Введите вторую обязательную статью расходов', 'Коммунальные услуги');
let mandatoryAmount2 = prompt('Во сколько это обойдется?', 4000);

let budgetMonth = Number(money) - Number(mandatoryAmount1) - Number(mandatoryAmount2);
console.log('Месячный бюджет: ' + budgetMonth + ' ₽');

let reachingMonthAmount = Math.ceil(mission / budgetMonth);
console.log('Месяцев до достижения цели: ' + reachingMonthAmount);

let budgetDay = Math.floor(budgetMonth / 30);
console.log('Ежедневный бюджет: ' + budgetDay + ' ₽');

if (budgetDay === 0) {
    console.log('У вас нулевой доход');
} else if (budgetDay > 0 && budgetDay < 600) {
    console.log('К сожалению у вас уровень дохода ниже среднего');
} else if (budgetDay >= 600 && budgetDay < 1200) {
    console.log('У вас средний уровень дохода');
} else if (budgetDay >= 1200) {
    console.log('У вас высокий уровень дохода');
} else {
    console.log('Что-то пошло не так');
}