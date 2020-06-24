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

let startBtn = document.getElementById('start'),
    plusBtn = document.getElementsByTagName('button'),
    incomePlus = plusBtn[0],
    expensesPlus = plusBtn[1],
    addIncomes = document.querySelectorAll('.additional_income-item'),
    depositCheck = document.querySelector('#deposit-check');

let budgetDay = document.querySelector('.budget_day-value'),
    budgetMonth = document.querySelector('.budget_month-value'),
    expensesMonth = document.querySelector('.expenses_month-value'),

    addIncome = document.querySelector('.additional_income-value'),
    addExpenses = document.querySelector('.additional_expenses-value'),
    addExpensesTitle = document.querySelector('.additional_expenses'),
    addExpensesItem = document.querySelector('.additional_expenses-item'),

    targetMonth = document.querySelector('.target_month-value'),
    targetAmount = document.querySelector('.target-amount'),

    salaryAmount = document.querySelector('.salary-amount'),

    expensesItems = document.querySelectorAll('.expenses-items'),
    expensesTitle = document.querySelector('.expenses-title'),

    incomeItems = document.querySelectorAll('.income-items'),
    incomeTitle = document.querySelector('.income-title');

let periodSelect = document.querySelector('.period-select'),
    periodAmount = document.querySelector('.period-amount'),
    incomePeriod = document.querySelector('.income_period-value');

let appData = {
    income: {},
    incomeMonths: 0,
    addIncome: [],
    expenses: {},
    addExpenses: [],
    expensesMonth: 0,
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,

    start: function () {

        appData.budget = salaryAmount.value;
        appData.getExpenses();
        appData.getIncome();
        appData.getExpensesMonth();
        appData.getAddExpenses();
        appData.getAddIncome();
        appData.calcBudget();

        appData.showResult();
    },

    checkStartBtn: function () {
        if (!isNumber(salaryAmount.value) || +salaryAmount.value === 0) {
            startBtn.disabled = true;
        } else {
            startBtn.disabled = false;
        }
    },

    showResult: function () {
        budgetMonth.value = appData.budgetMonth;
        budgetDay.value = Math.ceil(appData.budgetDay);
        expensesMonth.value = appData.expensesMonth;
        addExpenses.value = appData.addExpenses.join(', ');
        addIncome.value = appData.addIncome.join(', ');
        targetMonth.value = Math.ceil(appData.getTargetMonth());
        incomePeriod.value = appData.calcPeriod();
        periodSelect.addEventListener('change', function () {
            incomePeriod.value = appData.calcPeriod();
        });
    },

    addExpensesBlock: function () {

        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem,
            expensesPlus);

        expensesItems = document.querySelectorAll('.expenses-items');

        if (expensesItems.length === 3) {
            expensesPlus.style.display = 'none';
        }
    },

    getExpenses: function () {
        expensesItems.forEach(function (item) {
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;

            /*   if (!isString(itemExpenses) || (!isNumber(cashExpenses))) {
                   alert('Введите корректные данные в Обязательные расходы');
                   return;
               }*/

            if (itemExpenses !== '' && cashExpenses !== '') {
                appData.expenses[itemExpenses] = cashExpenses;
            }
        });
    },

    addIncomeBlock: function () {

        let cloneIncomeItem = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem,
            incomePlus);

        incomeItems = document.querySelectorAll('.income-items');

        if (incomeItems.length === 3) {
            incomePlus.style.display = 'none';
        }
    },

    getIncome: function () {
        incomeItems.forEach(function (item) {
            let itemIncome = item.querySelector('.income-title').value;
            let cashIncome = item.querySelector('.income-amount').value;


            /*   if (!isString(itemIncome) || (!isNumber(cashIncome))) {
                   alert('Введите корректные данные в Дополнительный доход');
                   return;
               }*/

            if (itemIncome !== '' && cashIncome !== '') {
                appData.addIncome[itemIncome] = cashIncome;
            }
        });

        for (let key in appData.addIncome) {
            appData.incomeMonths += +appData.addIncome[key];
        }
    },

    getAddExpenses: function () {
        let addExpenses = addExpensesItem.value.split(',');
        addExpenses.forEach(function (item) {
            item = item.trim();
            if (item !== '') {
                appData.addExpenses.push(item);
            }
        });
    },

    getAddIncome: function () {
        addIncomes.forEach(function (item) {
            let itemValue = item.value.trim();
            if (itemValue !== '') {
                appData.addIncome.push(itemValue);
            }
        });
    },

    getExpensesMonth: function () {
        for (let key in appData.expenses) {
            appData.expensesMonth += +appData.expenses[key];
        }
        return appData.expensesMonth;
    },

    // originally named getBudget

    calcBudget: function () {
        appData.budgetMonth = Number(appData.budget) +
            Number(appData.incomeMonths) - Number(appData.expensesMonth);

        appData.budgetDay = appData.budgetMonth / 30;
        console.log('Доход за месяц ', appData.incomeMonths);
        console.log('Месячный бюджет: ', appData.budgetMonth);
        console.log('Ежедневный бюджет: ', appData.budgetDay);
    },

    getTargetMonth: function () {
        return targetAmount.value / appData.budgetMonth;
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

    calcPeriod: function () {
        return Number(appData.budgetMonth) * Number(periodSelect.value);
    },

    rangeHandler: function () {
        periodAmount.innerText = periodSelect.value;
    },
};

window.onload = function () {
    startBtn.disabled = true;
};

salaryAmount.addEventListener('input', appData.checkStartBtn);
startBtn.addEventListener('click', appData.start);
expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);
periodSelect.addEventListener('input', appData.rangeHandler);

