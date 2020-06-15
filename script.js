'use strict';

let isNumber = function (number) {
    return !isNaN(parseFloat(number)) && isFinite(number);
};

let isString = function (string) {
    if (string && isNaN(parseFloat(string)) && !isFinite(string)) { 
        return true;
    } else {
        return false;
    }
};

let money,
    start = function () {
        do {
            money = prompt('Ваш месячный доход?', 30000);
        } while (!isNumber(money));
    };

start();

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
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 100000,
    period: 12,

    //originally named asking

    getUserInput: function () {

        if (confirm('Есть ли у вас дополнительный заработок?')) {
            let itemIncome;
            do {
                itemIncome = prompt('Какой у вас дополнительный заработок?', 'Репититор');
            } while (!isString(itemIncome));
            
            let cashIncome;
            do {
                cashIncome = prompt('Сколько зарабатываете в месяц на этом?', 10000);
            } while (!isNumber(cashIncome));
            
            appData.income[itemIncome] = cashIncome;        
        }

        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую',
            'Интернет, транспорт, коммунальные услуги');
        appData.addExpenses = addExpenses.toLocaleLowerCase().split(', ');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');

        for (let i = 0; i < 2; i++) {
            let itemExpenses;
            do {
                itemExpenses = prompt('Введите обязательную статью расходов', 'Еда');
            } while (!isString(itemExpenses));

            let cashExpenses;
            do {
                cashExpenses = prompt('Во сколько это обойдется?', 3000);
            } while (!isNumber(cashExpenses));

            appData.expenses[itemExpenses] = +cashExpenses;
        }
    },

    getExpensesMonth: function () {
        for (let key in appData.expenses) {
            appData.expensesAmountTotal += +appData.expenses[key];
        }
        return appData.expensesAmountTotal;
    },

    // originally named getBudget

    calcBudget: function () {
        appData.budgetMonth = Number(money) - Number(appData.expensesAmountTotal);
        appData.budgetDay = appData.budgetMonth / 30;
        console.log('Месячный бюджет: ', appData.budgetMonth);
        console.log('Ежедневный бюджет: ', appData.budgetDay);
    },

    getTargetMonth: function () {
        let periodOfTarget = Math.ceil(appData.mission / appData.budgetMonth);

        if (periodOfTarget <= 0 || !isFinite(periodOfTarget)) {
            return 'Цель не будет достигнута';
        }
        return periodOfTarget;
    },

    getStatusIncome: function () {
        if (appData.budgetDay === 0) {
            return ('У вас нулевой доход');
        } else if (appData.budgetDay > 0 && appData.budgetDay < 600) {
            return ('К сожалению у вас уровень дохода ниже среднего');
        } else if (appData.budgetDay >= 600 && appData.budgetDay < 1200) {
            return ('У вас средний уровень дохода');
        } else if (appData.budgetDay >= 1200) {
            return ('У вас высокий уровень дохода');
        } else {
            return ('Что-то пошло не так');
        }
    },

    getInfoDeposit: function () {
        if (appData.deposit) {
            do {
                appData.percentDeposit = prompt('Какой годовой процент?', 10);
            } while (!isNumber(appData.percentDeposit));

            do {
            appData.moneyDeposit = prompt('Какая первоначальная заложенная сумма?', 10000);
        } while (!isNumber(appData.moneyDeposit));
        }
    },

    calcSavedMoney: function () {
        return appData.budgetMonth * appData.period;
    }
};

appData.getUserInput();
appData.getExpensesMonth();
console.log('Сумма всех обязательных расходов за месяц: ' + appData.expensesAmountTotal + ' ₽');
appData.calcBudget();
console.log('Месяцев до достижения цели: ' + appData.getTargetMonth());
console.log(appData.getStatusIncome());

let printAppData = function () {
    console.log('Наша программа включает в себя данные: ');
    for (let key in appData) {
        console.log(key + ' is ' + appData[key]);
    }
};

printAppData();