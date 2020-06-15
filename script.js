'use strict';

let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

//originally named start   

let money, 
    getMonthlyIncome = function () {
        do {
            money = prompt('Ваш месячный доход?', 30000);
        } while (!isNumber(money));
};

getMonthlyIncome();

let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    expensesAmountTotal: 0,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    deposit: false,
    mission: 100000,
    period: 12,
    
    //originally named asking

    getUserInformation: function () {
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую',
            'Интернет, транспорт, коммунальные услуги');
            appData.addExpenses = addExpenses.toLocaleLowerCase().split(', ');
            appData.deposit = confirm('Есть ли у вас депозит в банке?');
    },
    
    getExpensesMonth: function () {        
   
        for (let i = 0; i < 2; i++) {
            appData.expenses.expensesKey = prompt('Введите обязательную статью расходов', 'Еда');
    
            let expensesValue;
            do {
                expensesValue = prompt('Во сколько это обойдется?', 3000);
            } while (!isNumber(expensesValue));
            appData.expensesAmountTotal += +expensesValue;
        }
        return appData.expensesAmountTotal;
    },

    getAccumulatedMonth: function () {
        let remainingMonthSavings = Number(money) - Number(expensesAmount);
        return remainingMonthSavings;
    },

    getTargetMonth: function () {
        let periodOfTarget = Math.ceil(appData.mission / accumulatedMonth);
    
        if (periodOfTarget <= 0 || !isFinite(periodOfTarget)) {
            return 'Цель не будет достигнута';
        }
        return periodOfTarget;
    },

    getStatusIncome: function () {
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
    },
};

appData.getUserInformation();

console.log('Длина строки "addExpenses": ' + appData.addExpenses.length);
console.log(`Период в месяцах равен: ${appData.period}`);
console.log(`Цель: заработать ${appData.mission} ₽`);
console.log('Статьи расхода: ' + appData.addExpenses);

let expensesAmount = appData.getExpensesMonth();
console.log('Сумма всех обязательных расходов за месяц: ' + expensesAmount + ' ₽');

let accumulatedMonth = appData.getAccumulatedMonth();
console.log('Месячный бюджет: ' + accumulatedMonth + ' ₽');

let reachingMonthAmount = appData.getTargetMonth();
console.log('Месяцев до достижения цели: ' + reachingMonthAmount);

let budgetDay = accumulatedMonth / 30;
console.log('Ежедневный бюджет: ' + Math.floor(budgetDay) + ' ₽');

console.log(appData.getStatusIncome());