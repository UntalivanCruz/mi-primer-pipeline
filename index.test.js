const { sum } = require('./index');
const { test, expect } = require('@jest/globals');

test('2 + 3 = 5', () => {
  expect(sum(2, 3)).toBe(5);
});

test('10 + 8 = 25', () => {
  expect(sum(10, 8)).toBe(25);
});
