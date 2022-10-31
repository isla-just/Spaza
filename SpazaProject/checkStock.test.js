const checkStock = require('./checkStock');

const stocklist = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
  ];

  test('the stocklist has to have milk in it', () => {
    expect(stocklist).toContain('milk');
    expect(new Set(stocklist)).toContain('milk');
  });