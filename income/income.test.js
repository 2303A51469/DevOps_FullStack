// income.test.js
const { addIncome, getTotalIncome } = require('./income');

describe('Income Module', () => {
  test('adds new income', () => {
    const incomes = [{ amount: 1000 }];
    const result = addIncome(incomes, { amount: 500 });
    expect(result).toHaveLength(2);
  });

  test('calculates total income', () => {
    const incomes = [{ amount: 1000 }, { amount: 2000 }];
    expect(getTotalIncome(incomes)).toBe(3000);
  });
});