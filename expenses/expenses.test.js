// expenses.test.js
const { addExpense, getTotalExpenses } = require('./expenses');

describe('Expenses Module', () => {
  test('adds new expense', () => {
    const expenses = [{ amount: 100 }];
    const result = addExpense(expenses, { amount: 50 });
    expect(result).toHaveLength(2);
  });

  test('calculates total expenses', () => {
    const expenses = [{ amount: 100 }, { amount: 200 }];
    expect(getTotalExpenses(expenses)).toBe(300);
  });
});