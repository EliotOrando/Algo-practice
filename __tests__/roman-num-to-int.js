const { romanToInt } = require('../algos/roman-num-to-int')
describe('roman num to int tests:', () => {
  it('should handle various roman numerals:', () => {
    expect(romanToInt('MMXVIII')).toBe(2018);
    expect(romanToInt('XXII')).toBe(22);
    expect(romanToInt('XCIX')).toBe(99);
    expect(romanToInt('MIX')).toBe(1009);
    expect(romanToInt('LXIV')).toBe(64);
    expect(romanToInt('DCLXIII')).toBe(663);
    expect(romanToInt('III')).toBe(3);
    expect(romanToInt('XCIV')).toBe(94);
  });
})