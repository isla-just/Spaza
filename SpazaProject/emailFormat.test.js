const emailFormat = require('./emailFormat');

test('check if email contains @', () => {
    expect('isla@just.co.za').toMatch(/@/);
});