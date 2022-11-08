const capitalize = require('../tasks/capitalize.js');

test('First letter capitalized is ', () => {
  expect(capitalize('hello')).toBe('Hello');
});