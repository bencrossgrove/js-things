const account = {
    name: 'Ben Crossgrove',
    expenses: [],
    income: [],
    addIncome: function(description, amount) {
        this.income.push({
            description: description,
            amount: amount
        });
    },
    addExpense: function(description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        });
    },
    getAccountSummary: function() {
        let totalExpenses = 0;
        let totalIncome = 0;
        let accountBalance = 0;
        this.expenses.forEach(function(expense) {
            totalExpenses = totalExpenses + expense.amount;
        });
        this.income.forEach(function(earning) {
            totalIncome = totalIncome + earning.amount;
        });
        accountBalance = totalIncome - totalExpenses;
        return `${this.name} has a balance of $${accountBalance}`;
    }
};

account.addExpense('Rent', 950);
account.addExpense('Coffee', 2);
account.addIncome('Work', 2000);
console.log(account.getAccountSummary());