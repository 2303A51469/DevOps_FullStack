// dashboard.js
function getTotalBalance(income, expenses) {
  return income - expenses;
}

function getMonthlyReport(data) {
  return {
    income: data.income || 0,
    expenses: data.expenses || 0,
    balance: getTotalBalance(data.income || 0, data.expenses || 0)
  };
}

module.exports = { getTotalBalance, getMonthlyReport };