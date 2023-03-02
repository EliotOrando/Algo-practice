const {longestNonRepeatingSubString} = require('../algos/longestNonRepeatingSubString');

describe('longestNonRepeatingSubString tests', () => {
  it('Should handle empty strings', () => {
    expect(longestNonRepeatingSubString('')).toBe(0);
  });
  it('Should handle single character strings', () => {
    expect(longestNonRepeatingSubString('a')).toBe(1);
    expect(longestNonRepeatingSubString('bb')).toBe(1);
    expect(longestNonRepeatingSubString('ddddd')).toBe(1);
  });
  it('Should handle strings of varying length', () => {
    expect(longestNonRepeatingSubString('sddensldkiisddsffffed')).toBe(7);
    expect(longestNonRepeatingSubString('ssendddeinnsfidsey')).toBe(6);
  });
});