const {stringToInt} = require('../algos/string_to_int')

describe('string to int tests:', () => {
  it('should handle positive numbers', () => {
    expect(stringToInt('5142')).toBe(5142);
    expect(stringToInt('1')).toBe(1);
    expect(stringToInt('+82')).toBe(82);
  });
  it('should handle negative numbers', () => {
    expect(stringToInt('-44235')).toBe(-44235);
    expect(stringToInt('-13')).toBe(-13);
    expect(stringToInt('-88888')).toBe(-88888);
  });
  it('should handle strings with whitespace at beginning', () => {
    expect(stringToInt('     54')).toBe(54);
    expect(stringToInt('           -332')).toBe(-332);
    expect(stringToInt('       22')).toBe(22);
  });
  it('should handle strings with characters following the numbers', () => {
    expect(stringToInt('-552eeed')).toBe(-552);
    expect(stringToInt('     93dde 3')).toBe(93);
    expect(stringToInt('-93ddfe43')).toBe(-93);
  });
  it('should return 0 if first character isn\'t a number, sign (-,+), or whitespace', () => {
    expect(stringToInt('a335')).toBe(0);
    expect(stringToInt('     - 98')).toBe(0);
    expect(stringToInt('       ee-')).toBe(0);
    expect(stringToInt('         +i1')).toBe(0);
  });
})