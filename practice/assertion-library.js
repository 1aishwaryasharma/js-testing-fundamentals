const { sum, difference } = require('../math');

let result = sum(7, 9);
let expected = 16;

expect(result).toBe(expected);

result = difference(9, 7);
expected = 2;

expect(result).toBe(expected);

function expect(actual) {
    return {
        toBe(expected) {
            if( actual !== expected) {
                throw new Error(`${actual} is not equal to ${expected}`);
            }
        },
        toBeLessThan(expected) {
            if(actual > expected) {
                throw new Error(`${actual} is not less than ${expected}`);
            }
        }
    }
}