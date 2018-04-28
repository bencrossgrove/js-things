// define account object
let myAccount = {
    name: 'Ben Crossgrove',
    expenses: 0,
    income: 0
};

let addExpense = function(account, amount) {
    account.expenses = account.expenses + amount;
};

let addIncome = function(account, amount) {
    account.income = account.income + amount;
};

let resetAccount = function(account) {
    account.expenses = 0;
    account.income = 0;
    console.log(`Account for ${account.name} was reset!`);
};

let getAccountSummary = function(account) {
    return `Account for ${account.name} has $${account.income-account.expenses}.`;
};

addExpense(myAccount, 250);
addExpense(myAccount, 150);
addIncome(myAccount, 1000);
console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(getAccountSummary(myAccount));