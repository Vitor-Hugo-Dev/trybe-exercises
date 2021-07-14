const sum = require('./exercise7.1.js');

test('sums two values', () => {
  expect(sum(2, 3)).toBe(5);
});