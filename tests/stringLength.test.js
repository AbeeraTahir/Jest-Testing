const stringLength = require('../tasks/stringLength.js');

test('Length of string should be 10', () => {
  expect(stringLength('agtyuilgfd')).toBe(10);
});

test('Length of string should be greater than 1 and less than 10 : ', () => {
  expect(() => {
    stringLength('Dangerousss');
  }).toThrow('Error Message');
});