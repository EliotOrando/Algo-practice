const {numPalindrome} = require('../algos/numPalindrome');

describe('numPalindrome tests:', () => {
  it('should handle palindrome numbers:', () => {
    expect(numPalindrome(101)).toBe(true);
    expect(numPalindrome(1)).toBe(true);
    expect(numPalindrome(0)).toBe(true);
    expect(numPalindrome(93844839)).toBe(true);
  });
  it('should handle non-palindrome numbers:', () => {
    expect(numPalindrome(54)).toBe(false);
    expect(numPalindrome(-55)).toBe(false);
    expect(numPalindrome(102)).toBe(false);
  });
});