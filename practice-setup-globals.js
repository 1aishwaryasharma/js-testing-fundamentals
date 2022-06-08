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

global.test = test;
global.expect = expect;