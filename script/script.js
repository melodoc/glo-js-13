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
    plusBtn = document.querySelectorAll('.btn_plus'),
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

let cancelBtn = document.querySelector('#cancel');

let inputText = document.querySelectorAll("input[type='text']");

let itemExpenses = document.querySelector('.expenses-title').value,
    cashExpenses = document.querySelector('.expenses-amount').value;

window.onload = function () {
    startBtn.disabled = true;
};

const AppData = function () {

    this.income = {};
    this.addIncome = [];
    this.expenses = {};
    this.addExpenses = [];
    this.incomeMonths = 0;
    this.expensesMonth = 0;
    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;

};

AppData.prototype.start = function () {

    this.budget = salaryAmount.value; //был не this, а AppData -- проверить
    this.getExpenses();
    this.getIncome();
    this.getExpensesMonth();
    this.getAddExpenses();
    this.getAddIncome();
    this.calcBudget();

    this.showResult();

    startBtn.disabled = true;
    startBtn.style.display = 'none';

    cancelBtn.disabled = false;
    cancelBtn.style.display = 'block';

    incomePlus.disabled = true;
    expensesPlus.disabled = true;

    let inputText = document.querySelectorAll("input[type='text']");

    inputText.forEach(function (element) {
        element.disabled = true;
    });
};

AppData.prototype.reset = function () {

    this.income = {};
    this.addIncome = [];
    this.expenses = {};
    this.addExpenses = [];
    this.incomeMonths = 0;
    this.expensesMonth = 0;
    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;

    incomePeriod.value = 0;
    periodSelect.value = 1;
    periodAmount.textContent = '1';

    cancelBtn.style.display = 'none';

    startBtn.disabled = false;
    startBtn.style.display = 'block';

    incomePlus.disabled = false;
    expensesPlus.disabled = false;

    inputText = document.querySelectorAll("input[type='text']");

    inputText.forEach(function (element) {
        element.disabled = false;
        element.value = '';
    });

    for (let i = 0; i < incomeItems.length; i++) {
        if (i !== 0) {
            incomeItems[i].remove();
        }
    }

    for (let i = 0; i < expensesItems.length; i++) {
        if (i !== 0) {
            expensesItems[i].remove();
        }
    }

    if (incomeItems.length === 3) {
        incomePlus.style.display = 'block';
    }

    if (expensesItems.length === 3) {
        expensesPlus.style.display = 'block';
    }
};

AppData.prototype.checkStartBtn = function () {
    if (!isNumber(salaryAmount.value) || +salaryAmount.value === 0) {
        startBtn.disabled = true;
    } else {
        startBtn.disabled = false;
    }
};

AppData.prototype.showResult = function () {
    const _this = this;
    budgetMonth.value = this.budgetMonth;
    budgetDay.value = Math.ceil(this.budgetDay);
    expensesMonth.value = this.expensesMonth;
    addExpenses.value = this.addExpenses.join(', ');
    addIncome.value = this.addIncome.join(', ');
    targetMonth.value = Math.ceil(this.getTargetMonth());
    incomePeriod.value = this.calcPeriod();
    periodSelect.addEventListener('change', function () {
        incomePeriod.value = _this.calcPeriod();
    });
};

AppData.prototype.addExpensesBlock = function () {

    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem,
        expensesPlus);

    expensesItems = document.querySelectorAll('.expenses-items');

    if (expensesItems.length === 3) {
        expensesPlus.style.display = 'none';
    }
};

AppData.prototype.getExpenses = function () {
    const _this = this;

    expensesItems.forEach(function (item) {
        let itemExpenses = item.querySelector('.expenses-title').value;
        let cashExpenses = item.querySelector('.expenses-amount').value;

        /*   if (!isString(itemExpenses) || (!isNumber(cashExpenses))) {
               alert('Введите корректные данные в Обязательные расходы');
               return;
           }*/

        if (itemExpenses !== '' && cashExpenses !== '') {
            _this.expenses[itemExpenses] = cashExpenses;
        }
    });
};

AppData.prototype.addIncomeBlock = function () {

    let cloneIncomeItem = incomeItems[0].cloneNode(true);
    incomeItems[0].parentNode.insertBefore(cloneIncomeItem,
        incomePlus);

    incomeItems = document.querySelectorAll('.income-items');

    if (incomeItems.length === 3) {
        incomePlus.style.display = 'none';
    }
};

AppData.prototype.getIncome = function () {
    const _this = this;
    incomeItems.forEach(function (item) {
        let itemIncome = item.querySelector('.income-title').value;
        let cashIncome = item.querySelector('.income-amount').value;


        /*   if (!isString(itemIncome) || (!isNumber(cashIncome))) {
               alert('Введите корректные данные в Дополнительный доход');
               return;
           }*/

        if (itemIncome !== '' && cashIncome !== '') {
            _this.addIncome[itemIncome] = cashIncome;
        }
    });

    for (let key in _this.addIncome) {
        this.incomeMonths += +this.addIncome[key];
    }
};

AppData.prototype.getAddExpenses = function () {
    let addExpenses = addExpensesItem.value.split(',');
    const _this = this;
    addExpenses.forEach(function (item) {
        item = item.trim();
        if (item !== '') {
            _this.addExpenses.push(item);
        }
    });
};

AppData.prototype.getAddIncome = function () {
    const _this = this;
    addIncomes.forEach(function (item) {
        let itemValue = item.value.trim();
        if (itemValue !== '') {
            _this.addIncome.push(itemValue);
        }
    });
};

AppData.prototype.getExpensesMonth = function () {
    for (let key in this.expenses) {
        this.expensesMonth += +this.expenses[key];
    }
    return this.expensesMonth;
};

// originally named getBudget

AppData.prototype.calcBudget = function () {
    this.budgetMonth = Number(this.budget) +
        Number(this.incomeMonths) - Number(this.expensesMonth);

    this.budgetDay = this.budgetMonth / 30;
    console.log('Доп. доход за месяц ', this.incomeMonths);
    console.log('Месячный бюджет: ', this.budgetMonth);
    console.log('Ежедневный бюджет: ', this.budgetDay);
};

AppData.prototype.getTargetMonth = function () {
    return targetAmount.value / this.budgetMonth;
};

AppData.prototype.getStatusIncome = function () {
    if (this.budgetDay === 0) {
        return ('У вас нулевой доход');
    } else if (this.budgetDay > 0 && this.budgetDay < 600) {
        return ('К сожалению у вас уровень дохода ниже среднего');
    } else if (this.budgetDay >= 600 && this.budgetDay < 1200) {
        return ('У вас средний уровень дохода');
    } else if (this.budgetDay >= 1200) {
        return ('У вас высокий уровень дохода');
    } else {
        return ('Что-то пошло не так');
    }
};

AppData.prototype.calcPeriod = function () {
    return Number(this.budgetMonth) * Number(periodSelect.value);
};

AppData.prototype.rangeHandler = function () {
    periodAmount.innerText = periodSelect.value;
};

AppData.prototype.eventListeners = function () {
    salaryAmount.addEventListener('input', appData.checkStartBtn);
    startBtn.addEventListener('click', appData.start.bind(appData));
    cancelBtn.addEventListener('click', appData.reset.bind(appData));
    expensesPlus.addEventListener('click', appData.addExpensesBlock);
    incomePlus.addEventListener('click', appData.addIncomeBlock);
    periodSelect.addEventListener('input', appData.rangeHandler);
};

const appData = new AppData();
appData.eventListeners();