const checkout = require('./checkout');

test('multiplies price 1 by its quantity and price 2 bu its quantity and sums them together', () => {
  expect(checkout(50, 100, 2, 3)).toBe(400);
});