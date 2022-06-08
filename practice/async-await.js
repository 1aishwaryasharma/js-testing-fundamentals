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

// this is used to provide helpful guide to where the test failed. This also helps to run all tests even though one of them might have failed
async function test(title, callback) {
    try {
        await callback();
        console.log(`✔ ${title} passed`);
    } catch (error) {
        console.log(`✘ ${title} failed`);
        console.log(error);
    }
}

// this is where the actual testing is performed
function expect(actual) {
    return {
        toBe(expected) {
            if (actual !== expected) {
                throw new Error(`${actual} is not equal to ${expected}`);
            }
        },
        toBeLessThan(expected) {
            if (actual > expected) {
                throw new Error(`${actual} is not less than ${expected}`);
            }
        }
    }
}