const allUniq = require('./1');

test('Checks the string "able" if all unique characters and should return true', () => {
    expect(allUniq.method1("able")).toBe(true);
});
test('Checks the string "test" to see if all unique characters and should return false', () => {
    expect(allUniq.method1("test")).toBe(false);
});
test('Checks the string "file" to see if all unique characters and should return true', () => {
    expect(allUniq.method1("file")).toBe(true);
});
test('Checks the string "have" to see if all unique characters and should return true', () => {
    expect(allUniq.method1("have")).toBe(true);
});
test('Checks the string "cookie"to see if all unique characters and should return false', () => {
    expect(allUniq.method1("cookie")).toBe(false);
});
test('Checks the string "foo" to see if all unique characters and should return false', () => {
    expect(allUniq.method1("foo")).toBe(false);
});
test('Checks the string "bar" to see if all unique characters and should return true', () => {
    expect(allUniq.method1("bar")).toBe(true);
});
