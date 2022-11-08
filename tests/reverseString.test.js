const reverseString = require('../tasks/reverseString.js');

test('Reverse of string should be 10', () => {
  expect(reverseString('hello')).toBe('olleh');
});