
const fizzBuzzWithYourData = require('../codigos/fizzbuzz.js');

test('Returns your name when the number is a multiple of 2', () => {
    expect(fizzBuzzWithYourData(4)).toBe('Mara');
});

test('Returns your first last name when the number is a multiple of 3', () => {
    expect(fizzBuzzWithYourData(9)).toBe('Chacón');
});

test('Returns your second last name when the number is a multiple of 7', () => {
    expect(fizzBuzzWithYourData(14)).toBe('Ortega');
});

test('Returns the number as a string when it does not meet any condition', () => {
    expect(fizzBuzzWithYourData(17)).toBe('17');
});
