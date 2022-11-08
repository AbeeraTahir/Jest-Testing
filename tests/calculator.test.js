const Calculator = require('../tasks/calculator.js');

const calculator = new Calculator();

describe('Addition', () => {
  test('1 + 1 evaluates to 2', () => {
    expect(calculator.add(1, 1)).toBe(2);
  });

  test('-10 + (-5) evaluates to -20', () => {
    expect(calculator.add(-10, -5)).toBe(-15);
  });

  test('15 + (-5) evaluated to 10', () => {
    expect(calculator.add(15, -5)).toBe(10);
  });
});

describe('Subtraction', () => {
  test('1 - 1 evaluates to 0', () => {
    expect(calculator.subtract(1, 1)).toBe(0);
  });

  test('-10 - (-5) evaluates to -5', () => {
    expect(calculator.subtract(-10, -5)).toBe(-5);
  });

  test('15 - (-5) evaluated to 20', () => {
    expect(calculator.subtract(15, -5)).toBe(20);
  });
});

describe('Multiplication', () => {
  test('1 * 1 evaluates to 1', () => {
    expect(calculator.multiply(1, 1)).toBe(1);
  });

  test('(-10) * (-5) evaluates to 75', () => {
    expect(calculator.multiply(-10, -5)).toBe(50);
  });

  test('15 * (-5) evaluated to -75', () => {
    expect(calculator.multiply(15, -5)).toBe(-75);
  });
});

describe('Division', () => {
  test('1 / 1 evaluates to 1', () => {
    expect(calculator.divide(1, 1)).toBe(1);
  });

  test('(-10) / (-5) evaluates to 2', () => {
    expect(calculator.divide(-10, -5)).toBe(2);
  });

  test('15 / (-5) evaluated to -3', () => {
    expect(calculator.divide(15, -5)).toBe(-3);
  });
});