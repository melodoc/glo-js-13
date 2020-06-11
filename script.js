'use strict';

let money = prompt('Ваш месячный доход?', 30000),
    income = 'Фриланс',
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую',
    'Интернет, транспорт, коммунальные услуги'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    mission = 100000,
    period = 12;

let showTypeOf = function (data) {
    console.log(`${data} это тип ` + typeof data);
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

console.log('Длина строки "addExpenses": ' + addExpenses.length);
console.log(`Период в месяцах равен: ${period}`);
console.log(`Цель: заработать ${mission} ₽`);

addExpenses = addExpenses.toLocaleLowerCase();
addExpenses = addExpenses.split(', ');
console.log('Статьи расхода: ' + addExpenses);

let mandatoryExpenses = [];

let getExpensesMonth = function() {
    let mandatoryAmountTotal = 0;

    for (let i = 0; i < 4; i++) {
        mandatoryExpenses[i] = prompt('Введите обязательную статью расходов', 'Еда');
        mandatoryAmountTotal += +prompt('Во сколько это обойдется?', 3000);
    }
    return mandatoryAmountTotal;
};

let expensesAmount = getExpensesMonth();

let getAccumulatedMonth = function() {
    let remainingMonthSavings = Number(money) - Number(expensesAmount);
    return remainingMonthSavings;
};

let accumulatedMonth = getAccumulatedMonth();

let getTargetMonth = function() {
    let periodOfTarget = Math.ceil(mission / accumulatedMonth);
    return periodOfTarget;
};

let reachingMonthAmount = getTargetMonth();
let budgetDay = accumulatedMonth / 30;

console.log('Сумма всех обязательных расходов за месяц: ' + expensesAmount + ' ₽');
console.log('Месячный бюджет: ' + accumulatedMonth + ' ₽');
console.log('Месяцев до достижения цели: ' + reachingMonthAmount);
console.log('Ежедневный бюджет: ' + Math.floor(budgetDay) + ' ₽');

let getStatusIncome = function () {
    if (budgetDay === 0) {
        return ('У вас нулевой доход');
    } else if (budgetDay > 0 && budgetDay < 600) {
        return ('К сожалению у вас уровень дохода ниже среднего');
    } else if (budgetDay >= 600 && budgetDay < 1200) {
        return ('У вас средний уровень дохода');
    } else if (budgetDay >= 1200) {
        return ('У вас высокий уровень дохода');
    } else {
        return ('Что-то пошло не так');
    }
};

console.log(getStatusIncome());