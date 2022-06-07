const { sum, difference } = require('../math');

let result = sum(3,7);
let expected = 10;

if(result !== expected) {
    throw new Error(`${result} is not equal to ${expected}`);
} else {
    console.log('SUCCESS');
}

result = difference(7,3);
expected = 4;

if(result !== expected) {
    throw new Error(`${result} is not equal to ${expected}`);
} else {
    console.log('SUCCESS');
}