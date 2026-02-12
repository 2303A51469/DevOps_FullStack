// expenses.js
function addExpense(expenses, newExpense) {
  return [...expenses, newExpense];
}

function getTotalExpenses(expenses) {
  return expenses.reduce((sum, expense) => sum + expense.amount, 0);
}

module.exports = { addExpense, getTotalExpenses };