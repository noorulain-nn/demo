const assert = require('assert');
const add = require('./app');

try {
    assert.strictEqual(add(2, 3), 5);
    assert.strictEqual(add(-1, 1), 0);
    console.log("All tests passed!");
} catch (error) {
    console.error("Test failed:", error.message);
    process.exit(1);
}
