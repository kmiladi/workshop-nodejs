var assert = require('assert');

describe('Basic Mocha String Test', () => {
    it('should return number of charachters in a string', () => {
        assert.equal("Hello".length, 4);
    });
    it('should return first charachter in a string', () => {
        assert.equal("Hello".charAt(0), 'H');
    });
});


// npm install mocha en global and execute `mocha assert.js`