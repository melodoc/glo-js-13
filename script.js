let money;
let income;
let addExpenses;
let deposit;
let mission;
let period;

money = 5000;
income = 'freelance';
addExpenses = 'Internet, transport, service';
deposit = true;
mission = 100000;
period = 12;

console.log('data type of variable "money": ' + typeof money);
console.log('data type of variable "income": ' + typeof income);
console.log('data type of variable "deposit": ' + typeof deposit);
console.log('length of string "addExpenses": ' + addExpenses.length);
console.log(`The period is ${period} months`);
console.log(`The goal is earning ${mission} USD`);

addExpenses = addExpenses.toLocaleLowerCase();
addExpenses = addExpenses.split(', ');

console.log(addExpenses);

let budgetDay;
budgetDay = money / 30;

console.log(budgetDay.toFixed(2));