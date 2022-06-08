const { sumAsync, differenceAsync } = require('../math');

test('sum should add two numbers', async () => {
    let result = await sumAsync(7, 9);
    let expected = 16;
    expect(result).toBe(expected);
});


test('difference should subtract two numbers', async () => {
    result = await differenceAsync(9, 7);
    expected = 2;
    expect(result).toBe(expected);
});