const urlify = require('./3');
test('Replace the space " " characters in a string with "%20"', () => {
    expect(urlify("Mr John Smith")).toBe("Mr%20John%20Smith");
});