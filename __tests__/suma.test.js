const suma = require('../src/functions/suma');

test('adds 1 + 2 to equal 3', () => {
  expect(suma(1, 2)).toBe(3);
});