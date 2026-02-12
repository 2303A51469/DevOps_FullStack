// dashboard.test.js
const { getTotalBalance, getMonthlyReport } = require('./dashboard');

describe('Dashboard Module', () => {
  test('calculates total balance correctly', () => {
    expect(getTotalBalance(5000, 3000)).toBe(2000);
  });

  test('generates monthly report', () => {
    const report = getMonthlyReport({ income: 5000, expenses: 3000 });
    expect(report.balance).toBe(2000);
  });
});