// income.js
function addIncome(incomes, newIncome) {
  return [...incomes, newIncome];
}

function getTotalIncome(incomes) {
  return incomes.reduce((sum, income) => sum + income.amount, 0);
}

module.exports = { addIncome, getTotalIncome };